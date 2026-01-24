# Repository Guidelines

## Project Structure & Module Organization

- `index.tsx`, `index.html`, `vite.config.ts`: Vite entry, routing (`HashRouter`), and build config.
- `src/`: main application code.
  - `src/pages/`: route-level pages (e.g., `SpeakingHomePage.tsx`, `QuestionBankPage.tsx`).
  - `src/components/`: reusable UI components (modals, toasts, buttons).
  - `src/context/`: cross-app state (e.g., `VocabularyContext.tsx` uses localStorage key `ielts-vocabulary`).
  - `src/data/`: speaking question bank + seasons (`part1/`, `part2/`, `seasons/`).
  - `src/vocab-app/`: shared vocabulary app (Learn/Practice), `data-sources/`, and deduped word `pool/`.
- `dist/`: production build output (generated).

## Build, Test, and Development Commands

- `npm install`: install dependencies.
- `npm run dev`: start dev server (defaults to `http://localhost:53127`).
- `npm run build`: typecheck + production build to `dist/`.
- `npm run preview`: serve `dist/` locally for a production-like check.
- GitHub Pages: deployed by GitHub Actions on push to `main` (see `.github/workflows/deploy.yml`).

## Coding Style & Naming Conventions

- TypeScript + React functional components; prefer hooks and keep route logic in `src/pages/`.
- Match existing formatting: 4-space indentation, semicolons, single quotes.
- Names: components `PascalCase.tsx`, hooks `useX.ts`, contexts `XxxContext.tsx`. Keep new vocab data near existing `src/vocab-app/data-*.ts` patterns.

## Testing Guidelines

- No dedicated test runner currently. Treat `npm run build` as the correctness gate.
- Smoke-check key routes after changes: `/#/`, `/#/speaking`, `/#/speaking/bank`, `/#/speaking/vocab`, and confirm vocabulary add/remove persists across refresh.

## Commit & Pull Request Guidelines

- Git history may not be present in some checkouts; use clear, scoped messages (e.g., `feat(speaking): add ...`, `fix(vocab): ...`).
- PRs: include a short summary, affected routes/modules, screenshots for UI changes, and any data migration notes (localStorage keys, schema changes).

## Security & Configuration Tips

- AI scoring uses `VITE_GEMINI_API_KEY` via `.env.local` (gitignored by `*.local`). Never commit secrets.
