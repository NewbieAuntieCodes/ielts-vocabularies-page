<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# IELTS 全科练习站（Listening / Speaking / Reading / Writing）

一个前端练习站，目标是把 **听力 / 口语 / 阅读 / 写作** 放在同一个网页里开发，模块之间共享“词库与生词本”。

当前已接入：
- **Listening**：场景词汇（Learn / Practice）
- **Speaking**：题库 + 词汇（可从题库跳转到词汇话题）
- **生词本**：全站共用（双击/划词添加）

## 页面路由

- `/`：听说读写总入口
- `/listening`：听力词汇
- `/speaking`：口语入口
- `/speaking/bank`：口语题库
- `/speaking/vocab`：口语词汇
- `/reading`、`/writing`：占位页（待接入）

## 词汇架构（合并与去重的核心）

- `src/vocab-app/`：词汇练习应用（Learn / Practice / 选词）
- `src/vocab-app/context/VocabDataContext.tsx`：通过 Provider 注入不同模块的 `ieltsTopics/allSubTopics`
- `src/vocab-app/data-sources/speaking.ts`：口语词汇数据与筛选
- `src/vocab-app/data-sources/listening.ts`：听力词汇数据与筛选
- `src/vocab-app/pool/`：A-Z 词条库（逐步把重复词条沉淀到这里，话题文件用 `getManyFromPool()` 引用）
- `src/context/VocabularyContext.tsx`：全站共享生词本（localStorage: `ielts-vocabulary`）

## 开发指南

### 环境要求

- Node.js：建议 `>= 20`（本仓库的 GitHub Actions 默认使用 Node 20）

### 常用命令

- 安装依赖：`npm install`
- 本地开发：`npm run dev`（默认 `http://localhost:53127`）
- 构建产物：`npm run build`（输出到 `dist/`）
- 本地预览：`npm run preview`

### 路由说明（GitHub Pages）

- 本项目使用 `HashRouter`（见 `index.tsx`），所以页面路径形如：`/#/speaking/vocab`
- GitHub Pages 子路径部署需要配置 `vite.config.ts` 的 `base` 为仓库名，例如：`/ielts-vocabularies-page/`

### 词汇卡片（SubTopic）设计思路

词汇页里的每一张 “Card/话题卡片”，对应一个 `SubTopic` 数据对象（类型定义见 `src/vocab-app/data-types.ts`）。推荐的数据设计模式是：

1. **卡片负责“结构”**：`id/title/type/color` + `wordSections`（分组标题与顺序）
2. **词条统一放到中央词库**：`src/vocab-app/pool/` 里维护 `Word`（`word/phonetic/definition/example/emoji`）
3. **卡片只引用词库**：用 `getManyFromPool([...])` 组装词表，并用 `level: basic|advanced` 标记难度

以 `Snacks` 为例：`src/vocab-app/data-snacks.ts` 把词汇分成三组（Types / Flavor & Ingredients / Health & Habits），并在每组里进一步分 `basic` 与 `advanced`，从 `pool` 里批量引用，避免在多个话题里重复写同一个词条。

### 如何新增/维护词汇

- 新增词条（推荐）：编辑 `src/vocab-app/pool/<字母>.ts` 增加一条记录，并确保 `src/vocab-app/pool/index.ts` 已聚合该字母文件
- 新增卡片：在 `src/vocab-app/data-*.ts`（或对应目录）新增一个 `SubTopic`，用 `getManyFromPool()` 引用词库，然后在 `src/vocab-app/data.ts`（口语题库汇总）或 `src/vocab-app/data-sources/listening.ts`（听力场景词汇）中注册
- 维护原则：**词条内容只在 A-Z `pool` 维护**（`word/phonetic/definition/example/emoji`），卡片里只维护“引用列表 + 分组 + 难度 level”；避免在多个卡片里复制粘贴同一个词条
- 调试提示：如果某个词的 id 在词库中找不到，控制台会 `console.warn`，并返回占位词条（见 `src/vocab-app/pool/utils.ts`）
- 复用提示：如 `Study or work` 这类卡片会被 Speaking/Listening 共同引用，建议用 re-export 方式避免两份数据重复维护（例如 `src/vocab-app/data-part1-01-study.ts` 复用 `src/vocab-app/data-2025-05-08/common.ts`）

### 批量导入（推荐：50-300 个词/短语）

当你在聊天里给一串新词时，建议走“批量导入 → 自动去重 → 写入 pool”的流程：

- **Codex 工作流（推荐）**：直接把词表贴给 Codex，让它补全词条并写入 `src/vocab-app/pool/`，再在卡片里用 `getManyFromPool()` 引用
- **脚本预览（去重/查重）**：`npm run vocab:import -- --input path/to/words.txt`（默认只预览，不写文件）
- **可选：脚本写入（Gemini 自动补全）**：`npm run vocab:import -- --input path/to/words.txt --apply --gemini`（需 `.env.local` 配置 `VITE_GEMINI_API_KEY`）

### 复制笔记（含分类/分组/难度）

在词汇选择页（`WordSelectionPage`）点击「复制笔记」时，复制内容会在原有的“单词 + 音标 + 表情 + 释义”基础上，额外加上：

- **卡片标题（分类）**
- **每个分组标题（wordSections）**
- **基础词汇 / 进阶词汇**（按 `level: 'basic' | 'advanced'` 自动归类）

因此：新增/维护词汇时请确保每个词条都有明确的 `level`（从 `pool` 引用时通过 `getManyFromPool(ids, 'basic'|'advanced')` 设置；内联词条则补齐 `level` 字段）。

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies: `npm install`
2. Run the app: `npm run dev`

> 如果你要使用“AI 练习评测”，在 `.env.local` 里设置 `VITE_GEMINI_API_KEY`，并重启 `npm run dev`。

## Deploy（GitHub Pages）

本仓库使用 GitHub Actions 自动构建并部署到 GitHub Pages：每次 push 到 `main` 会运行 `.github/workflows/deploy.yml`，把 `dist/` 发布到 Pages。

首次启用需要在 GitHub 仓库 `Settings -> Pages` 里把 `Source` 选择为 `GitHub Actions`。
