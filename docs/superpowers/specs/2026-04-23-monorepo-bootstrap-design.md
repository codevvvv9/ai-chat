# Monorepo Bootstrap Design

**目标**

搭建一个基于 `pnpm workspace` 的 monorepo，包含两个 TypeScript 子工程：
- `apps/web`: `Vite + React + shadcn/ui`
- `apps/server`: `Node + Express + MySQL`

本次仅提供最小可运行骨架与占位示例代码，不实现任何业务逻辑。

**设计约束**

- 包管理器统一使用 `pnpm`
- 前后端均使用 TypeScript
- 目录清晰，尽量保持单文件职责单一
- 先满足依赖齐备、项目可启动、示例可运行
- 数据库仅接入 `mysql2` 与基础配置，不引入 ORM

**目录设计**

- `apps/web`
  - React 前端工程
  - 包含一个简单页面与一个示例 shadcn/ui 组件使用
- `apps/server`
  - Express 后端工程
  - 包含健康检查路由、示例 API 路由、MySQL 连接占位
- `packages/config`
  - 共享 TypeScript 基础配置
- `docs/superpowers/specs`
  - 设计文档
- `docs/superpowers/plans`
  - 实施计划

**工程方案**

1. 使用 `pnpm-workspace.yaml` 管理工作区
2. 根目录提供统一脚本，如 `dev:web`、`dev:server`、`build`、`check`
3. 前端手工组装 `Vite + React + Tailwind + shadcn/ui` 的最小配置，避免额外业务模板
4. 后端使用 `tsx` 作为开发运行时，`tsc` 输出构建产物
5. 用 `.env.example` 提供 MySQL 连接参数示例

**验收标准**

- `pnpm install` 成功
- `pnpm --filter web build` 成功
- `pnpm --filter server build` 成功
- `pnpm --filter server dev` 可启动并暴露基础路由
- `pnpm --filter web dev` 可启动并渲染占位页面
- 根目录 `AGENTS.md` 已同步项目功能与关键目录结构
