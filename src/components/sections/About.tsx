import { GraduationCap } from 'lucide-react'

const education = [
  {
    school: 'San Diego State University',
    degree: 'M.S. Computer Science',
    period: 'Aug 2025 – May 2027',
    location: 'San Diego, CA',
    detail: 'GPA: 3.49/4.0 · Data Structures, Data Science, Machine Learning',
  },
  {
    school: 'Savitribai Phule Pune University',
    degree: 'B.E. Computer Engineering',
    period: 'Jul 2017 – Jul 2021',
    location: 'Pune, India',
    detail: 'CGPA: 3.5/4.0',
  },
]

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionLabel>About</SectionLabel>
        <div className="mt-8 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
              I build things that think.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a software engineer and AI researcher with 4+ years of industry experience,
                currently doing my master's at SDSU. My work spans autonomous agents, RAG systems,
                and full-stack engineering.
              </p>
              <p>
                At the CARE Lab, I build agents that self-direct experiments and improve over time.
                Before that, I spent 3 years at Cognizant as a Software Developer II, shipping
                NL2SQL systems, ETL pipelines, and cloud infrastructure for Fortune 500 clients.
              </p>
              <p>
                I'm drawn to problems where AI meets real systems — where a clever architecture
                makes something genuinely useful.
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6 text-sm font-medium text-foreground">
              <GraduationCap size={16} className="text-muted-foreground" />
              Education
            </div>
            <div className="space-y-6">
              {education.map(edu => (
                <div key={edu.school} className="border-l-2 border-border pl-4">
                  <p className="font-medium text-foreground text-sm">{edu.school}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">{edu.degree}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {edu.period} · {edu.location}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{edu.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
      {children}
    </p>
  )
}
