import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { About } from "@/components/about"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Skills />
      <About />
      <SiteFooter />
    </main>
  )
}
