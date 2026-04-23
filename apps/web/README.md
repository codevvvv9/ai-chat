# `apps/web`

前端子工程，基于 `Vite + React + TypeScript + Ant Design`。当前只提供最小可运行骨架和占位页面，没有业务功能。

## 目录

```text
apps/web
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── dist/
└── src/
    ├── App.test.tsx
    ├── App.tsx
    ├── index.css
    ├── main.tsx
    └── test-setup.ts
```

`dist/` 是构建输出目录，可以随时通过 `pnpm build` 重新生成。

## 依赖

运行时依赖：

- `react`
- `react-dom`
- `antd`

开发依赖：

- `vite`
- `@vitejs/plugin-react`
- `typescript`
- `vitest`
- `jsdom`
- `@testing-library/react`
- `@testing-library/jest-dom`
- `@types/react`
- `@types/react-dom`

前端不再保留 `shadcn/ui`、Tailwind CSS 和 PostCSS 相关配置文件。

## 启动方式

在仓库根目录运行：

```bash
pnpm dev:web
```

这会转发到 `apps/web` 的 `pnpm dev`，本质上是启动 `vite` 开发服务器。

如果已经进入 `apps/web` 目录，也可以直接运行：

```bash
pnpm dev
```

## 构建方式

在仓库根目录运行：

```bash
pnpm build
```

这会通过 workspace 过滤构建前端和后端两个子工程，其中前端对应 `apps/web` 的 `pnpm build`，实际执行的是 `vite build`，输出到 `dist/`。

如果已经进入 `apps/web` 目录，也可以直接运行：

```bash
pnpm build
```

## 测试与 Typecheck

在仓库根目录运行前端测试：

```bash
pnpm --filter web test
```

在仓库根目录运行类型检查：

```bash
pnpm check
```

这会通过 workspace 过滤执行 `apps/web` 和 `apps/server` 的 `typecheck`。前端这里对应的是 `pnpm typecheck`，实际执行 `tsc --noEmit`。

如果已经进入 `apps/web` 目录，也可以直接运行：

```bash
pnpm typecheck
```

## 占位页面

`src/App.tsx` 当前渲染的是一个最小的 Ant Design 占位页：

- 使用 `ConfigProvider` 注入基础主题 token
- 使用 `Card`、`Typography`、`Tag`、`Button` 组合出说明卡片
- 页面样式由 `antd/dist/reset.css` 和 `src/index.css` 的少量全局样式共同提供

页面入口是 `src/main.tsx`，它会挂载到 `index.html` 里的 `#root`。`src/App.test.tsx` 用于验证占位页已切换到 Ant Design 文案和按钮。

## 与根工程的关系

`apps/web` 是根仓库 `pnpm workspace` 里的一个子包，根目录 `package.json` 通过 workspace 脚本统一调用它：

- `pnpm dev:web` -> `pnpm --filter web dev`
- `pnpm build` -> `pnpm -r --filter web --filter server build`
- `pnpm check` -> `pnpm -r --filter web --filter server typecheck`

根目录的包管理器版本是 `pnpm@10.33.0`，因此这个子工程应按仓库统一约定使用 `pnpm`。
