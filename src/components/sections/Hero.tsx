import { ArrowDown, Mail, ExternalLink } from 'lucide-react'

export function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="max-w-2xl">
        <p className="mb-4 font-mono text-xs tracking-widest text-muted-foreground uppercase">
          Software Engineer · AI/ML Researcher
        </p>
        <h1 className="mb-6 text-5xl font-semibold tracking-tight text-foreground md:text-6xl">
          Vinay Surtani
        </h1>
        <p className="mb-10 text-lg text-muted-foreground leading-relaxed">
          Building intelligent systems at the intersection of AI and software engineering.
          Currently pursuing my MS in Computer Science at{' '}
          <span className="text-foreground font-medium">SDSU</span> and researching
          autonomous RAG agents at the CARE Lab.
        </p>

        <div className="flex items-center justify-center gap-4 mb-12">
          <a
            href="mailto:surtanivinay@gmail.com"
            className="flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
          >
            <Mail size={15} />
            Get in touch
          </a>
          <a
            href="https://github.com/vinaysurtani"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-accent transition-colors"
          >
            <ExternalLink size={15} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/vinay-surtani"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-accent transition-colors"
          >
            <ExternalLink size={15} />
            LinkedIn
          </a>
        </div>

        <a
          href="#about"
          className="inline-flex flex-col items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          <span>Scroll down</span>
          <ArrowDown size={14} className="animate-bounce" />
        </a>
      </div>
    </section>
  )
}
