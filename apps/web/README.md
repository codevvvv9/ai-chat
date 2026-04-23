# `apps/web`

前端子工程，基于 `Vite + React + TypeScript + Tailwind CSS + shadcn/ui`。当前只提供最小可运行骨架和占位页面，没有业务功能。

## 目录

```text
apps/web
├── components.json
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
├── dist/
└── src/
    ├── App.tsx
    ├── index.css
    ├── main.tsx
    ├── components/
    │   └── ui/
    │       └── button.tsx
    └── lib/
        └── utils.ts
```

`dist/` 是构建输出目录，当前仓库里已经存在产物文件，但它可以随时通过 `pnpm build` 重新生成。

## 依赖

运行时依赖：

- `react`
- `react-dom`
- `@radix-ui/react-slot`
- `class-variance-authority`
- `clsx`
- `tailwind-merge`

开发依赖：

- `vite`
- `@vitejs/plugin-react`
- `typescript`
- `tailwindcss`
- `postcss`
- `autoprefixer`
- `tailwindcss-animate`
- `@types/react`
- `@types/react-dom`
- `@types/node`

`shadcn/ui` 相关配置在 `components.json` 中，当前只落地了一个按钮组件：`src/components/ui/button.tsx`。

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

## Typecheck

在仓库根目录运行：

```bash
pnpm check
```

这会通过 workspace 过滤执行 `apps/web` 和 `apps/server` 的 `typecheck`。前端这里对应的是 `pnpm typecheck`，实际执行 `tsc --noEmit`。

如果已经进入 `apps/web` 目录，也可以直接运行：

```bash
pnpm typecheck
```

## 占位页面

`src/App.tsx` 目前渲染的是一个最小占位页：

- 全屏背景使用了基础的径向渐变和线性渐变
- 中央卡片展示项目标题和说明文字
- 页面中放了一个 `shadcn/ui` 的 `Button` 示例

页面入口是 `src/main.tsx`，它会挂载到 `index.html` 里的 `#root`。基础样式和主题变量定义在 `src/index.css`，`@` 别名指向 `src/`，用于导入组件和工具函数。

## 与根工程的关系

`apps/web` 是根仓库 `pnpm workspace` 里的一个子包，根目录 `package.json` 通过 workspace 脚本统一调用它：

- `pnpm dev:web` -> `pnpm --filter web dev`
- `pnpm build` -> `pnpm -r --filter web --filter server build`
- `pnpm check` -> `pnpm -r --filter web --filter server typecheck`

根目录的包管理器版本是 `pnpm@10.33.0`，因此这个子工程应按仓库统一约定使用 `pnpm`。
