export function About() {
  return (
    <section id="about" className="border-y border-border bg-card px-6 py-24">
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
        <div>
          <p className="font-mono text-sm text-accent">{"// про мене"}</p>
          <h2 className="mt-3 text-balance text-3xl font-bold md:text-4xl">Трохи про мій шлях у коді</h2>
        </div>
        <div className="flex flex-col gap-4 leading-relaxed text-muted-foreground">
          <p>
            {
              "Мене звати Artur-Adrian Tuz, в мережі — simplytoose. Я full-stack інженер: почав із вебтехнологій — HTML5, CSS3 та JavaScript, а згодом освоїв TypeScript, React та Python."
            }
          </p>
          <p>
            На бекенді працюю з Node.js (Express), проєктую REST API та зберігаю дані в MongoDB. Використовую Git,
            GitHub і Docker у щоденній роботі — від невеликих скриптів до повноцінних застосунків.
          </p>
          <div className="mt-2 grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold text-primary">10+</span>
              <span className="font-mono text-xs">технологій</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold text-primary">4</span>
              <span className="font-mono text-xs">мови програмування</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold text-primary">∞</span>
              <span className="font-mono text-xs">бажання вчитися</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
