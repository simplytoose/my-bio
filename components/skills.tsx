import { Braces, Server, Palette, Wrench } from "lucide-react"

const categories = [
  {
    name: "Мови програмування",
    icon: Braces,
    tag: "languages",
    description: "Основні мови, якими я пишу код щодня.",
    items: ["JavaScript", "TypeScript", "Python", "Java"],
  },
  {
    name: "Backend & Бази даних",
    icon: Server,
    tag: "backend",
    description: "Серверна розробка, API та зберігання даних.",
    items: ["Node.js (Express)", "REST API", "MongoDB"],
  },
  {
    name: "Frontend",
    icon: Palette,
    tag: "frontend",
    description: "Інтерфейси, верстка та сучасні вебзастосунки.",
    items: ["HTML5", "CSS3", "React.js"],
  },
  {
    name: "Інструменти & DevOps",
    icon: Wrench,
    tag: "tools",
    description: "Робочі інструменти для розробки та деплою.",
    items: ["Git", "GitHub", "npm/yarn", "Docker", "CLI"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-sm text-accent">{"// навички"}</p>
        <h2 className="mt-3 text-balance text-3xl font-bold md:text-4xl">Технології, з якими я працюю</h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.name}
                className="group flex flex-col gap-4 rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary"
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  <span className="font-mono text-xs text-muted-foreground">{category.tag}</span>
                </div>
                <h3 className="text-lg font-semibold">{category.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{category.description}</p>
                <ul className="mt-auto flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-secondary px-3 py-1 font-mono text-xs text-secondary-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
