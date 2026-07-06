import { Mail, Github } from "lucide-react"

export function SiteFooter() {
  return (
    <footer id="contact" className="px-6 py-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
        <p className="font-mono text-sm text-accent">{"// контакти"}</p>
        <h2 className="text-balance text-3xl font-bold md:text-4xl">{"Зв'яжіться зі мною"}</h2>
        <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
          Відкритий до цікавих проєктів та співпраці. Напишіть мені — обговоримо ідеї.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:hello@example.com"
            className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Написати листа
          </a>
          <a
            href="https://github.com/simplytoose"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium transition-colors hover:border-primary"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            GitHub
          </a>
        </div>
        <p className="mt-8 font-mono text-xs text-muted-foreground">
          {"© Artur-Adrian Tuz (simplytoose) — створено з JavaScript, TypeScript, Python та React у серці"}
        </p>
      </div>
    </footer>
  )
}
