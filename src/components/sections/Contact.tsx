import { ExternalLink, Mail } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-8">
          Contact
        </p>

        <div className="max-w-lg">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
            Let's work together.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            I'm open to research collaborations, full-time roles, and interesting projects.
            Drop me a message and I'll get back to you.
          </p>

          <div className="space-y-3">
            <a
              href="mailto:surtanivinay@gmail.com"
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <Mail size={15} className="shrink-0" />
              <span className="group-hover:underline underline-offset-2">surtanivinay@gmail.com</span>
            </a>
            <a
              href="https://linkedin.com/in/vinay-surtani"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ExternalLink size={15} className="shrink-0" />
              <span className="group-hover:underline underline-offset-2">linkedin.com/in/vinay-surtani</span>
            </a>
            <a
              href="https://github.com/vinaysurtani"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ExternalLink size={15} className="shrink-0" />
              <span className="group-hover:underline underline-offset-2">github.com/vinaysurtani</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
