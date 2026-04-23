# Monorepo Bootstrap Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 搭建包含 React 前端与 Express 后端的 TypeScript monorepo，并安装所需依赖与最小占位代码。

**Architecture:** 根目录使用 `pnpm workspace` 管理两个应用与一个共享配置包。前端负责提供可运行的 `Vite + React + shadcn/ui` 占位页面，后端负责提供 `Express + mysql2` 的基础服务与健康检查接口。根目录统一管理脚本、文档与基础校验。

**Tech Stack:** `pnpm workspace`, `TypeScript`, `Vite`, `React`, `Tailwind CSS`, `shadcn/ui`, `Express`, `mysql2`, `tsx`

---

### Task 1: 根目录 monorepo 与共享配置

**Files:**
- Create: `pnpm-workspace.yaml`
- Create: `package.json`
- Create: `tsconfig.base.json`
- Create: `packages/config/package.json`
- Create: `packages/config/base.json`

- [ ] 建立 workspace 配置并声明 `apps/*` 与 `packages/*`
- [ ] 创建根目录脚本，覆盖 install 后的开发、构建、检查入口
- [ ] 提供共享 TypeScript 基础配置供前后端复用

### Task 2: 前端应用骨架

**Files:**
- Create: `apps/web/package.json`
- Create: `apps/web/tsconfig.json`
- Create: `apps/web/tsconfig.node.json`
- Create: `apps/web/vite.config.ts`
- Create: `apps/web/index.html`
- Create: `apps/web/src/main.tsx`
- Create: `apps/web/src/App.tsx`
- Create: `apps/web/src/index.css`
- Create: `apps/web/components.json`
- Create: `apps/web/postcss.config.js`
- Create: `apps/web/tailwind.config.ts`
- Create: `apps/web/src/components/ui/button.tsx`
- Create: `apps/web/src/lib/utils.ts`

- [ ] 建立 `Vite + React + TypeScript` 基础结构
- [ ] 加入 `Tailwind` 与 `shadcn/ui` 所需最小配置
- [ ] 编写一个不含业务逻辑的占位页面，展示按钮组件与接口占位文案

### Task 3: 后端应用骨架

**Files:**
- Create: `apps/server/package.json`
- Create: `apps/server/tsconfig.json`
- Create: `apps/server/src/index.ts`
- Create: `apps/server/src/app.ts`
- Create: `apps/server/src/config/env.ts`
- Create: `apps/server/src/db/mysql.ts`
- Create: `apps/server/.env.example`

- [ ] 建立 `Express + TypeScript` 基础结构
- [ ] 编写健康检查与示例 API 路由
- [ ] 提供 MySQL 连接池占位实现与环境变量配置

### Task 4: 文档同步与验证

**Files:**
- Create: `AGENTS.md`
- Create: `README.md`

- [ ] 更新根目录 `AGENTS.md`，描述项目功能与关键目录结构
- [ ] 补充根目录 `README.md`，说明启动、构建与目录用途
- [ ] 执行安装、构建与基础校验，确认脚手架可用
