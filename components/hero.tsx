import { MeshGradientSVG } from "@/components/mesh-gradient-svg"

export function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 py-20">
      <div className="flex w-full max-w-5xl flex-col items-center gap-12 md:flex-row md:justify-between">
        <div className="flex max-w-xl flex-col items-center gap-6 text-center md:items-start md:text-left">
          <p className="font-mono text-sm text-accent">{"> привіт, я simplytoose_"}</p>
          <h1 className="text-balance text-4xl font-bold leading-tight md:text-6xl">
            {"Artur-Adrian Tuz — full-stack інженер"}
          </h1>
          <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
            Пишу на JavaScript, TypeScript та Python, будую бекенди на Node.js з MongoDB і створюю інтерфейси на
            React.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
            {["JavaScript", "TypeScript", "Python", "Node.js", "React", "MongoDB"].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href="#skills"
            className="mt-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Мої навички
          </a>
        </div>

        <div className="w-56 shrink-0 md:w-72">
          <MeshGradientSVG />
        </div>
      </div>
    </section>
  )
}
