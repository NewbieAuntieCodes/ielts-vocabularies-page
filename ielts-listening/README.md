<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# 雅思听力词汇 - IELTS Listening Vocabulary

一个专注于雅思听力场景词汇的前端练习站点，包含：

- 词汇分类浏览（场景/话题）
- Learn / Practice 模式
- 生词本（双击/划词添加）

## 后续规划：听力 / 口语词汇合并建议

如果后期需要把“雅思听力词汇”和“雅思口语词汇”合并到同一个网页，但目前希望先拆分以提升迭代与 AI 修改速度，建议采用：

- **共享内核 + 两个薄壳应用**：把通用能力沉淀在共享层（数据结构、词汇引擎、生词本、基础 UI），听力/口语各自维护独立的页面与数据组织。
- **统一数据契约**：两边词汇都输出同一种 `Word/SubTopic` 结构；差异信息（Part/场景/话题标签）用可选字段或 `meta` 扩展，避免两套类型分叉。
- **合并方式建议**：同站点路由前缀（如 `/listening`、`/speaking`）或首页 Tab 切换；开发上仍保持目录边界清晰，减少跨目录引用以降低上下文与复杂度。

## Run Locally

**Prerequisites:** Node.js


1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`
