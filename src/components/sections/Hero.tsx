import { useEffect } from 'react'
import { Plus, Mail, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { renderCanvas, stopCanvas } from '@/components/ui/canvas'

export function Hero() {
  useEffect(() => {
    renderCanvas()
    return () => stopCanvas()
  }, [])

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">

        {/* Badge */}
        <div className="z-10 mb-6 mt-10 sm:justify-center md:mb-4 md:mt-20">
          <div className="relative flex items-center whitespace-nowrap rounded-full border border-border bg-card px-3 py-1 text-xs leading-6 text-muted-foreground">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Looking for Summer 2026 internships
          </div>
        </div>

        {/* Bordered hero box */}
        <div className="mb-8 mt-4 md:mt-6 px-2 w-full">
          <div className="relative mx-auto h-full max-w-4xl border border-border p-6 [mask-image:radial-gradient(600rem_48rem_at_center,white,transparent)] md:px-12 md:py-16">
            {/* Corner plus icons */}
            <Plus
              strokeWidth={2}
              className="text-muted-foreground/50 absolute -left-3 -top-3 h-6 w-6"
            />
            <Plus
              strokeWidth={2}
              className="text-muted-foreground/50 absolute -bottom-3 -left-3 h-6 w-6"
            />
            <Plus
              strokeWidth={2}
              className="text-muted-foreground/50 absolute -right-3 -top-3 h-6 w-6"
            />
            <Plus
              strokeWidth={2}
              className="text-muted-foreground/50 absolute -bottom-3 -right-3 h-6 w-6"
            />

            <h1 className="select-none text-5xl font-semibold tracking-tight text-foreground md:text-7xl lg:text-8xl">
              Vinay Surtani
            </h1>
          </div>
        </div>

        {/* Tagline */}
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-4">
          Software Engineer · GenAI &amp; Agentic Systems
        </p>

        {/* Bio */}
        <p className="mx-auto mb-10 max-w-xl px-6 text-sm text-muted-foreground leading-relaxed md:text-base">
          I design agentic systems: LLMs that orchestrate tools, make decisions, and run in
          production without falling apart. Currently pursuing my MS in Computer Science at{' '}
          <span className="text-foreground font-medium">SDSU</span>.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg">
            <a href="mailto:surtanivinay@gmail.com">
              <Mail size={15} className="mr-2" />
              Get in touch
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="https://github.com/vinaysurtani" target="_blank" rel="noopener noreferrer">
              <ExternalLink size={15} className="mr-2" />
              GitHub
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="https://linkedin.com/in/vinay-surtani" target="_blank" rel="noopener noreferrer">
              <ExternalLink size={15} className="mr-2" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>

      {/* Canvas background — pointer-events-none so clicks pass through to content */}
      <canvas
        id="canvas"
        className="pointer-events-none absolute inset-0 w-full h-full"
      />
    </section>
  )
}
