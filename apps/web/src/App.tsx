import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.08),_transparent_32%),linear-gradient(180deg,_hsl(var(--background)),_hsl(var(--muted)/0.18))] px-6 py-10 text-foreground">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-3xl items-center">
        <div className="w-full rounded-[2rem] border border-border bg-card/95 p-8 shadow-soft backdrop-blur">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-muted-foreground">
            ai-chat / web
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            TypeScript + Vite + React + Tailwind + shadcn/ui
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            这里是 `apps/web` 的最小可运行骨架，只保留页面占位、基础样式和
            shadcn 按钮示例，不包含任何业务逻辑。
          </p>
          <div className="mt-8">
            <Button>shadcn 按钮</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
