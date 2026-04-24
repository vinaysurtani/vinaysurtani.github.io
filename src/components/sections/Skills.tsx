const skillGroups = [
  {
    label: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'Go', 'SQL', 'Java', 'C++'],
  },
  {
    label: 'AI & ML',
    skills: ['RAG', 'LangChain', 'LangGraph', 'PyTorch', 'TensorFlow', 'HuggingFace', 'YOLO'],
  },
  {
    label: 'LLM & Integrations',
    skills: ['Claude', 'AWS Bedrock', 'ElevenLabs', 'Twilio', 'HeyGen', 'Codex'],
  },
  {
    label: 'Cloud & DevOps',
    skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
  },
  {
    label: 'Data & Messaging',
    skills: ['PostgreSQL', 'Qdrant', 'MongoDB', 'Redis', 'Kafka', 'Supabase', 'Databricks'],
  },
  {
    label: 'Frameworks',
    skills: ['React', 'Next.js', 'FastAPI', 'Django', 'Spring Boot', 'Angular'],
  },
  {
    label: 'Observability',
    skills: ['OpenTelemetry', 'Grafana', 'PyTest'],
  },
  {
    label: 'Security',
    skills: ['OAuth 2.0', 'AWS Cognito'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-muted/30">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-8">
          Skills
        </p>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skillGroups.map(group => (
            <div key={group.label}>
              <p className="text-xs font-mono text-muted-foreground mb-3 uppercase tracking-wider">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map(skill => (
                  <span
                    key={skill}
                    className="rounded-md border border-border bg-card px-2 py-1 text-xs text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
