const experiences = [
  {
    company: 'San Diego State University',
    role: 'Research Assistant — CARE Lab',
    period: 'Oct 2025 – Present',
    location: 'San Diego, CA',
    bullets: [
      'Built autonomous RAG agent with MCP-style tools that self-directed experiments, improving paraphrase hit rate from 85.4% to 91.7%.',
      'Diagnosed dimensionality collapse in 384-dim MiniLM where queries became indistinguishable vectors; migrated to 768-dim MPNet.',
      'Analyzed retrieval failure modes using VLM heatmap analysis to guide agent hypothesis generation.',
      'Automated clinic patient outreach via ElevenLabs and Twilio, handling calls, feedback collection, and escalation end-to-end.',
    ],
  },
  {
    company: 'Cognizant Technology Solutions',
    role: 'Software Developer II — Data for Consumer Goods',
    period: 'Aug 2022 – Aug 2025',
    location: 'Pune, India',
    bullets: [
      'Built an NL2SQL system on Amazon Redshift translating natural language to SQL using Amazon Bedrock with schema-aware retrieval.',
      'Engineered schema enrichment pipeline auto-generating metadata via LLM over 500+ tables with join mappings for query grounding.',
      'Built hybrid dense-sparse retrieval over enriched schema with role-based filtering at vector store level.',
      'Engineered automated ETL pipelines for SAP migrations, reducing data prep time from 2 days to 3 hours across 15+ projects.',
      'Streamlined pipeline deployments with AWS Lambda + Docker, cutting release cycles from weekly to daily with zero downtime.',
    ],
  },
  {
    company: 'Cognizant Technology Solutions',
    role: 'Software Developer',
    period: 'Aug 2021 – Aug 2022',
    location: 'Pune, India',
    bullets: [
      'Implemented a real-time messaging platform handling 10K+ concurrent users with sub-200ms latency for enterprise support.',
      'Configured OAuth2.0 authentication with AWS Cognito, enabling secure multi-tenant access across 100+ client channels.',
      'Optimized Kubernetes microservices (EKS) with auto-scaling CI/CD, sustaining 99.9% uptime during 300% peak traffic growth.',
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-muted/30">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-8">
          Experience
        </p>

        <div className="space-y-12">
          {experiences.map(exp => (
            <div key={exp.role} className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8">
              <div className="md:text-right">
                <p className="text-xs font-mono text-muted-foreground">{exp.period}</p>
                <p className="text-xs text-muted-foreground mt-1">{exp.location}</p>
              </div>
              <div>
                <p className="font-medium text-foreground">{exp.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
