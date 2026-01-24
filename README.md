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

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies: `npm install`
2. Run the app: `npm run dev`

> 如果你要使用“AI 练习评测”，在 `.env.local` 里设置 `VITE_GEMINI_API_KEY`，并重启 `npm run dev`。
