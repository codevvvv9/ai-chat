# 项目说明

这是一个基于 `pnpm workspace` 的 monorepo 示例工程，包含一个前端子工程和一个后端子工程：

- 前端：`Vite + React + TypeScript + shadcn/ui`
- 后端：`Node + Express + TypeScript + MySQL(mysql2)`

当前阶段仅提供脚手架、依赖与最小占位示例代码，不包含业务功能。
根目录支持通过 `pnpm dev` 和 `pnpm dev:native` 并行启动前后端开发服务。
后端子工程额外提供了一个 `apps/server/docker-dev-compose.yml`，用于本地开发时启动 MySQL 数据库容器；该配置使用 `apps/server/.env` 或 `apps/server/.env.example` 中的数据库变量，并将数据持久化到仓库根目录 `.db`。
后端当前还包含一个 `src/store/database-example.ts` 示例和 `pnpm db:check` 脚本，用于执行最小 MySQL 查询并验证数据库联通性。

# 关键目录结构

- `apps/web`: 前端应用
- `apps/server`: 后端应用
- `apps/server/docker-dev-compose.yml`: 后端本地开发用 MySQL 容器编排文件
- `apps/server/src/store`: 后端数据库示例 store
- `apps/server/src/scripts`: 后端本地脚本，例如数据库连通检查
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
