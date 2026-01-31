#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

let GoogleGenAI;
let Type;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');

const POOL_DIR = path.join(repoRoot, 'src', 'vocab-app', 'pool');
const POOL_INDEX_PATH = path.join(POOL_DIR, 'index.ts');

const HELP_TEXT = `
Usage:
  npm run vocab:import -- --input path/to/words.txt [--apply] [--gemini] [--dry-run]

Examples:
  # Preview only (default)
  npm run vocab:import -- --input words.txt

  # Write (with placeholders)
  npm run vocab:import -- --input words.txt --apply

  # Write (auto-fill via Gemini)
  npm run vocab:import -- --input words.txt --apply --gemini

  # Read from stdin
  cat words.txt | npm run vocab:import --

Options:
  --input <file>      Read words from file. If omitted, reads from stdin.
  --apply             Write changes to pool files (default: preview only).
  --gemini            Use Gemini to auto-fill phonetic/definition/example/emoji.
  --model <id>        Gemini model id (default: gemini-3-flash-preview).
  --batch <n>         Max words per AI request (default: 40).
  --dry-run           Print changes summary without writing files.
  --help              Show help.
`;

const parseArgs = (argv) => {
    const args = {
        input: null,
        apply: false,
        gemini: false,
        model: 'gemini-3-flash-preview',
        batch: 40,
        dryRun: false,
        help: false,
    };

    for (let i = 0; i < argv.length; i += 1) {
        const token = argv[i];
        if (token === '--help' || token === '-h') {
            args.help = true;
            continue;
        }
        if (token === '--apply') {
            args.apply = true;
            continue;
        }
        if (token === '--gemini' || token === '--ai') {
            args.gemini = true;
            continue;
        }
        if (token === '--dry-run') {
            args.dryRun = true;
            continue;
        }
        if (token === '--input') {
            args.input = argv[i + 1] || null;
            i += 1;
            continue;
        }
        if (token === '--model') {
            args.model = argv[i + 1] || args.model;
            i += 1;
            continue;
        }
        if (token === '--batch') {
            const raw = argv[i + 1];
            const parsed = raw ? Number.parseInt(raw, 10) : Number.NaN;
            if (Number.isFinite(parsed) && parsed > 0) {
                args.batch = parsed;
            }
            i += 1;
            continue;
        }
    }

    return args;
};

const readStdin = async () => {
    const chunks = [];
    for await (const chunk of process.stdin) {
        chunks.push(chunk);
    }
    return Buffer.concat(chunks).toString('utf8');
};

const readInputText = async (inputPath) => {
    if (inputPath) {
        return fs.readFileSync(path.resolve(repoRoot, inputPath), 'utf8');
    }
    if (process.stdin.isTTY) {
        return '';
    }
    return readStdin();
};

const normalizeSpaces = (value) => value.replace(/\s+/g, ' ').trim();

const stripListPrefix = (value) => value.replace(/^\s*(?:[-*•]+|\d+[.)])\s*/g, '');

const cleanRawItem = (value) => {
    const cleaned = value
        .replace(/[“”"]/g, '')
        .replace(/[’]/g, '\'')
        .replace(/\r/g, '')
        .trim();

    return normalizeSpaces(stripListPrefix(cleaned));
};

const isLikelyHeaderLine = (value) => {
    const v = value.toLowerCase();
    if (!v) return true;
    if (/^list\s*\d+/.test(v)) return true;
    return false;
};

const parseWordList = (text) => {
    const normalized = text
        .replace(/[，、；;]/g, '\n')
        .replace(/\r\n/g, '\n')
        .replace(/\r/g, '\n');

    const items = [];

    for (const line of normalized.split('\n')) {
        const cleaned = cleanRawItem(line);
        if (!cleaned) continue;
        if (isLikelyHeaderLine(cleaned)) continue;
        items.push(cleaned);
    }

    return items;
};

const toPoolKey = (displayWord) => normalizeSpaces(displayWord).toLowerCase();

const poolKeyToLetter = (poolKey) => {
    const first = poolKey[0] || '';
    if (first >= 'a' && first <= 'z') return first;
    return null;
};

const escapeForSingleQuote = (value) => value.replace(/\\/g, '\\\\').replace(/'/g, '\\\'');

const tsString = (value) => `'${escapeForSingleQuote(value)}'`;

const chunk = (arr, size) => {
    const out = [];
    for (let i = 0; i < arr.length; i += size) {
        out.push(arr.slice(i, i + size));
    }
    return out;
};

const readEnvLocal = () => {
    const envPath = path.join(repoRoot, '.env.local');
    if (!fs.existsSync(envPath)) return {};
    const lines = fs.readFileSync(envPath, 'utf8').split('\n');
    const env = {};
    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;
        const idx = trimmed.indexOf('=');
        if (idx <= 0) continue;
        const key = trimmed.slice(0, idx).trim();
        const value = trimmed.slice(idx + 1).trim();
        if (!key) continue;
        env[key] = value;
    }
    return env;
};

const getGeminiApiKey = () => {
    const fromEnv = process.env.VITE_GEMINI_API_KEY;
    if (fromEnv && fromEnv.trim()) return fromEnv.trim();
    const envLocal = readEnvLocal();
    const fromFile = envLocal.VITE_GEMINI_API_KEY;
    if (fromFile && fromFile.trim()) return fromFile.trim();
    return null;
};

const ensureGeminiSdk = async () => {
    if (GoogleGenAI && Type) return;
    const sdk = await import('@google/genai');
    GoogleGenAI = sdk.GoogleGenAI;
    Type = sdk.Type;
};

const fillWithGemini = async ({ words, model }) => {
    const apiKey = getGeminiApiKey();
    if (!apiKey) {
        throw new Error('Missing VITE_GEMINI_API_KEY (set it in `.env.local` or env var).');
    }

    await ensureGeminiSdk();

    const ai = new GoogleGenAI({ apiKey });
    const payload = words.map((w) => ({ id: w.id, word: w.word }));
    const response = await ai.models.generateContent({
        model,
        contents: JSON.stringify(payload),
        config: {
            systemInstruction: [
                'You are a bilingual IELTS vocabulary editor.',
                'Return ONLY JSON.',
                'For each input item, generate:',
                '- phonetic: IPA in slashes, e.g. "/kəˈrɪkjələm/".',
                '- definition: concise Chinese meaning.',
                '- example: a natural English sentence using the word/phrase.',
                '- emoji: a single emoji.',
                'Do not change the input id.',
            ].join('\n'),
            responseMimeType: 'application/json',
            responseSchema: {
                type: Type.ARRAY,
                items: {
                    type: Type.OBJECT,
                    properties: {
                        id: { type: Type.STRING },
                        phonetic: { type: Type.STRING },
                        definition: { type: Type.STRING },
                        example: { type: Type.STRING },
                        emoji: { type: Type.STRING },
                    },
                    required: ['id', 'phonetic', 'definition', 'example', 'emoji'],
                },
            },
        },
    });

    const data = JSON.parse(response.text || '[]');
    if (!Array.isArray(data)) {
        throw new Error('Gemini response is not an array.');
    }

    const byId = new Map();
    for (const item of data) {
        if (!item || typeof item !== 'object') continue;
        if (typeof item.id !== 'string') continue;
        byId.set(item.id, item);
    }

    return byId;
};

const getPoolFiles = () => {
    return fs
        .readdirSync(POOL_DIR)
        .filter((f) => f.endsWith('.ts') && f !== 'index.ts' && f !== 'utils.ts');
};

const getExistingPoolKeys = () => {
    const keyRegex = /'((?:\\'|[^'])*)'\s*:\s*\{/g;
    const keys = new Set();
    for (const file of getPoolFiles()) {
        const full = path.join(POOL_DIR, file);
        const text = fs.readFileSync(full, 'utf8');
        let match;
        while ((match = keyRegex.exec(text))) {
            keys.add(match[1].replace(/\\'/g, '\''));
        }
    }
    return keys;
};

const ensurePoolLetterFile = (letter) => {
    const filePath = path.join(POOL_DIR, `${letter}.ts`);
    if (fs.existsSync(filePath)) return { filePath, created: false };

    const exportName = `words${letter.toUpperCase()}`;
    const initial = [
        "import { Word } from '../data-types';",
        '',
        `export const ${exportName}: Record<string, Word> = {`,
        '};',
        '',
    ].join('\n');
    fs.writeFileSync(filePath, initial, 'utf8');
    return { filePath, created: true };
};

const ensurePoolIndexHasLetter = (letter) => {
    const indexText = fs.readFileSync(POOL_INDEX_PATH, 'utf8');
    const importPath = `./${letter}`;
    const exportName = `words${letter.toUpperCase()}`;

    if (indexText.includes(`from '${importPath}'`)) return;

    const importLines = indexText.split('\n');
    const lastImportIndex = importLines.findLastIndex((line) => line.startsWith('import '));
    if (lastImportIndex === -1) {
        throw new Error('Unable to locate import section in pool/index.ts');
    }

    importLines.splice(lastImportIndex + 1, 0, `import { ${exportName} } from '${importPath}';`);

    const spreadToken = `  ...${exportName},`;
    if (!indexText.includes(spreadToken)) {
        const spreadIndex = importLines.findIndex((line) => line.includes('...wordsY'));
        if (spreadIndex === -1) {
            throw new Error('Unable to locate spread section in pool/index.ts');
        }
        importLines.splice(spreadIndex, 0, spreadToken);
    }

    fs.writeFileSync(POOL_INDEX_PATH, importLines.join('\n'), 'utf8');
};

const insertEntriesIntoPoolFile = ({ filePath, entries }) => {
    const original = fs.readFileSync(filePath, 'utf8');
    const insertionPoint = original.lastIndexOf('};');
    if (insertionPoint === -1) {
        throw new Error(`Invalid pool file format: ${path.relative(repoRoot, filePath)}`);
    }

    let before = original.slice(0, insertionPoint);
    const after = original.slice(insertionPoint);

    const beforeTrimmed = before.replace(/\s+$/g, '');
    const isEmptyObject = beforeTrimmed.endsWith('{');
    const needsComma = !isEmptyObject && !beforeTrimmed.endsWith(',');
    if (needsComma) {
        const trailingWhitespace = before.match(/\s*$/)?.[0] ?? '';
        const body = before.slice(0, before.length - trailingWhitespace.length);
        before = `${body},${trailingWhitespace}`;
    }

    const entryLines = [];
    for (const entry of entries) {
        entryLines.push(
            `  ${tsString(entry.id)}: {`,
            `    word: ${tsString(entry.word)},`,
            `    phonetic: ${tsString(entry.phonetic)},`,
            `    definition: ${tsString(entry.definition)},`,
            `    example: ${tsString(entry.example)},`,
            `    emoji: ${tsString(entry.emoji)}`,
            '  },',
        );
    }

    const injected = `${entryLines.join('\n')}\n`;
    const updated = `${before}${injected}${after}`;
    return updated;
};

const main = async () => {
    const args = parseArgs(process.argv.slice(2));

    if (args.help) {
        process.stdout.write(HELP_TEXT.trimStart());
        process.stdout.write('\n');
        return;
    }

    const inputText = await readInputText(args.input);
    if (!inputText.trim()) {
        process.stderr.write('No input. Provide --input <file> or pipe text via stdin.\n');
        process.stderr.write(HELP_TEXT.trimStart());
        process.stderr.write('\n');
        process.exitCode = 1;
        return;
    }

    const rawWords = parseWordList(inputText);
    const unique = new Map(); // id -> display word
    const duplicates = new Set();
    const invalid = [];

    for (const raw of rawWords) {
        const id = toPoolKey(raw);
        const letter = poolKeyToLetter(id);
        if (!id || !letter) {
            invalid.push(raw);
            continue;
        }
        if (unique.has(id)) {
            duplicates.add(id);
            continue;
        }
        unique.set(id, raw);
    }

    const existingKeys = getExistingPoolKeys();
    const toAdd = [];
    const already = [];

    for (const [id, word] of unique.entries()) {
        if (existingKeys.has(id)) {
            already.push(id);
            continue;
        }
        toAdd.push({ id, word });
    }

    if (invalid.length > 0) {
        process.stderr.write(`Skipped invalid items (${invalid.length}):\n`);
        for (const item of invalid.slice(0, 20)) {
            process.stderr.write(`- ${item}\n`);
        }
        if (invalid.length > 20) process.stderr.write('...\n');
    }

    process.stdout.write(`Input: ${rawWords.length} items\n`);
    process.stdout.write(`Unique: ${unique.size}\n`);
    process.stdout.write(`Already in pool: ${already.length}\n`);
    process.stdout.write(`To add: ${toAdd.length}\n`);
    if (duplicates.size > 0) {
        process.stdout.write(`Duplicates in input: ${duplicates.size}\n`);
    }

    if (toAdd.length === 0) return;

    const shouldWrite = args.apply && !args.dryRun;

    if (!shouldWrite) {
        process.stdout.write('\nPreview only: no files written.\n');
        process.stdout.write('Would add ids:\n');
        for (const id of toAdd.map((w) => w.id)) {
            process.stdout.write(`- ${id}\n`);
        }
        return;
    }

    const filled = new Map();
    const needsReview = new Set();

    if (args.gemini) {
        const batches = chunk(toAdd, args.batch);
        for (const batchWords of batches) {
            const byId = await fillWithGemini({ words: batchWords, model: args.model });
            for (const w of batchWords) {
                const aiItem = byId.get(w.id);
                if (!aiItem) {
                    needsReview.add(w.id);
                    continue;
                }
                filled.set(w.id, {
                    word: w.word,
                    phonetic: aiItem.phonetic || '',
                    definition: aiItem.definition || '',
                    example: aiItem.example || '',
                    emoji: aiItem.emoji || '❓',
                });
            }
        }
    }

    const byLetter = new Map(); // letter -> entries[]
    for (const w of toAdd) {
        const letter = poolKeyToLetter(w.id);
        if (!letter) continue;
        const aiFields = filled.get(w.id);
        const entry = {
            id: w.id,
            word: w.word,
            phonetic: aiFields?.phonetic || '',
            definition: aiFields?.definition || (args.gemini ? '' : 'TODO'),
            example: aiFields?.example || '',
            emoji: aiFields?.emoji || '❓',
        };
        if (args.gemini && (!entry.phonetic || !entry.definition || !entry.example)) {
            needsReview.add(w.id);
        }
        const list = byLetter.get(letter) || [];
        list.push(entry);
        byLetter.set(letter, list);
    }

    for (const [letter, entries] of byLetter.entries()) {
        entries.sort((a, b) => a.id.localeCompare(b.id));
        const { filePath, created } = ensurePoolLetterFile(letter);
        if (created) {
            ensurePoolIndexHasLetter(letter);
        }
        const updated = insertEntriesIntoPoolFile({ filePath, entries });
        fs.writeFileSync(filePath, updated, 'utf8');
    }

    process.stdout.write('\nDone.\n');
    if (needsReview.size > 0) {
        process.stdout.write('Needs review (missing fields):\n');
        for (const id of [...needsReview].slice(0, 50)) {
            process.stdout.write(`- ${id}\n`);
        }
        if (needsReview.size > 50) process.stdout.write('...\n');
    }
};

await main();
