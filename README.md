# AI Chat Monorepo

一个基于 `pnpm workspace` 的最小 monorepo 示例工程，包含：

- `apps/web`: `Vite + React + TypeScript + shadcn/ui`
- `apps/server`: `Express + TypeScript + MySQL(mysql2)`

当前仅包含可运行的占位代码与基础依赖，不包含业务实现。

## 子工程文档

- 前端工程说明见 [apps/web/README.md](/Users/wushao/wushaoDev/ai-chat/apps/web/README.md)
- 后端工程说明见 [apps/server/README.md](/Users/wushao/wushaoDev/ai-chat/apps/server/README.md)
- 共享接口文档见 [docs/api/README.md](/Users/wushao/wushaoDev/ai-chat/docs/api/README.md)

进入子工程目录后，应优先以该目录下的 `README.md` 为准。

## 开发

安装依赖：

```bash
pnpm install
```

启动前端：

```bash
pnpm dev:web
```

启动后端：

```bash
pnpm dev:server
```

并行启动前后端：

```bash
pnpm dev
```

使用 `pnpm` 原生并行方式启动前后端：

```bash
pnpm dev:native
```

构建全部应用：

```bash
pnpm build
```

类型检查：

```bash
pnpm check
```

## 目录结构

```text
.
├── apps
│   ├── server
│   │   ├── README.md
│   │   └── src/
│   └── web
│       ├── README.md
│       └── src/
├── docs
│   ├── api
│   │   └── README.md
│   └── superpowers
│       ├── plans
│       └── specs
├── packages
│   └── config
├── package.json
├── pnpm-workspace.yaml
└── tsconfig.base.json
```
