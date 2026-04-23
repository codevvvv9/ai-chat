# `apps/server`

后端子工程，基于 `Node + Express + TypeScript + mysql2`。当前只提供最小可运行骨架和基础占位代码，没有业务逻辑。

## 目录

```text
apps/server
├── .env.example
├── package.json
├── tsconfig.json
├── src/
│   ├── app.ts
│   ├── index.ts
│   ├── config/
│   │   └── env.ts
│   ├── db/
│   │   └── mysql.ts
│   └── routes/
│       ├── example.ts
│       └── health.ts
└── dist/
```

`dist/` 是构建输出目录，当前仓库里已经存在产物文件，但它可以随时通过构建命令重新生成。

## 依赖

运行时依赖：

- `express`
- `mysql2`
- `dotenv`

开发依赖：

- `typescript`
- `tsx`
- `@types/express`
- `@types/node`

## 环境变量

示例配置见 [`.env.example`](/Users/wushao/wushaoDev/ai-chat/apps/server/.env.example)。

`src/config/env.ts` 通过 `dotenv/config` 读取环境变量，并提供默认值。当前支持的变量如下：

- `NODE_ENV`，默认 `development`
- `HOST`，默认 `0.0.0.0`
- `PORT`，默认 `3000`
- `MYSQL_HOST`，默认 `127.0.0.1`
- `MYSQL_PORT`，默认 `3306`
- `MYSQL_USER`，默认 `root`
- `MYSQL_PASSWORD`，默认空字符串
- `MYSQL_DATABASE`，默认 `ai_chat`
- `MYSQL_CONNECTION_LIMIT`，默认 `10`

## 启动方式

在仓库根目录运行：

```bash
pnpm dev:server
```

这会转发到 `apps/server` 的 `pnpm dev`，本质上执行的是 `tsx watch src/index.ts`。

如果已经进入 `apps/server` 目录，也可以直接运行：

```bash
pnpm dev
```

## 构建与运行

在仓库根目录构建：

```bash
pnpm --filter server build
```

或者直接构建全部子工程：

```bash
pnpm build
```

后端构建产物输出到 `dist/`，入口文件是 `dist/index.js`。

生产启动命令：

```bash
pnpm --filter server start
```

如果已经进入 `apps/server` 目录，也可以直接运行：

```bash
pnpm start
```

## Typecheck

在仓库根目录运行：

```bash
pnpm check
```

这会统一执行前后端的类型检查。只检查后端时，可以运行：

```bash
pnpm --filter server typecheck
```

如果已经进入 `apps/server` 目录，也可以直接运行：

```bash
pnpm typecheck
```

## API 文档

后端接口说明不再在本文件中逐项维护，统一以共享入口 `docs/api/README.md` 为准。

MySQL 连接池初始化位于 `src/db/mysql.ts`，目前只是基础占位，不包含实际业务访问逻辑。

## 与根工程的关系

`apps/server` 是根仓库 `pnpm workspace` 里的一个子包，根目录脚本会统一调用它：

- `pnpm dev:server` -> `pnpm --filter server dev`
- `pnpm build` -> `pnpm -r --filter web --filter server build`
- `pnpm check` -> `pnpm -r --filter web --filter server typecheck`

`apps/server/tsconfig.json` 继承自 `packages/config/base.json`，因此这个子工程应按仓库统一约定使用 `pnpm` 和共享 TypeScript 配置。
