# 项目说明

这是一个基于 `pnpm workspace` 的 monorepo 示例工程，包含一个前端子工程和一个后端子工程：

- 前端：`Vite + React + TypeScript + shadcn/ui`
- 后端：`Node + Express + TypeScript + MySQL(mysql2)`

当前阶段仅提供脚手架、依赖与最小占位示例代码，不包含业务功能。
根目录支持通过 `pnpm dev` 和 `pnpm dev:native` 并行启动前后端开发服务。

# 关键目录结构

- `apps/web`: 前端应用
- `apps/server`: 后端应用
- `docs/api`: 前后端共享 API 文档
- `packages/config`: 共享 TypeScript 配置
- `docs/superpowers/specs`: 设计文档
- `docs/superpowers/plans`: 实施计划

# 文档约定

- 根目录 `README.md` 负责说明 monorepo 总览
- `apps/web/README.md` 负责说明前端子工程
- `apps/server/README.md` 负责说明后端子工程
- `docs/api/README.md` 负责说明前后端共享的接口文档
- 进入某个子工程目录后，应优先阅读该目录下的 `README.md`
