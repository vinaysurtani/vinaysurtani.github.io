import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerChild, inView } from '@/lib/motionVariants'

const experiences = [
  {
    company: 'San Diego State University',
    role: 'Research Assistant, CARE Lab',
    period: 'Oct 2025 – Present',
    location: 'San Diego, CA',
    bullets: [
      'Automated clinic patient outreach via ElevenLabs and Twilio, handling calls, feedback collection, and escalation end-to-end.',
      'Built autonomous RAG agent with MCP-style tools that self-directed experiments, improving paraphrase hit rate 85.4% to 91.7%.',
      'Diagnosed dimensionality collapse in 384-dim MiniLM where queries became indistinguishable vectors, migrated to 768-dim MPNet.',
      'Analyzed retrieval failure modes using VLM heatmap analysis to guide agent hypothesis generation across experiments.',
    ],
  },
  {
    company: 'Cognizant Technology Solutions',
    role: 'Software Developer II — Data & AI Platform (Consumer Packaged Goods)',
    period: 'Aug 2022 – Aug 2025',
    location: 'Pune, India',
    bullets: [
      'Developed NL2SQL system across heterogeneous enterprise warehouses processing tens of TBs with dialect-aware SQL generation.',
      'Engineered schema enrichment pipeline auto-generating metadata via LLM over 500+ tables with join mappings for query grounding.',
      'Constructed hybrid dense-sparse retrieval over enriched schema with role-based filtering at vector store level to block access.',
      'Designed intent classifier with Amazon Bedrock, ambiguity detection and clarification loop to resolve query intent pre-execution.',
      'Architected Python workflow orchestrator with dependency graphs and retries, managing 30+ workflows, improving reliability to 98%.',
      'Streamlined automated ETL pipelines for SAP migrations, reducing data prep time from 2 days to 3 hours across 15+ projects.',
      'Established reusable validation framework deployed across 10+ domains, standardizing migration quality for $5M+ projects.',
      'Accelerated pipeline deployments with AWS Lambda + Docker, cutting release cycles from weekly to daily with zero downtime.',
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
        <motion.p
          className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-8"
          variants={fadeUp}
          {...inView}
        >
          Experience
        </motion.p>

        <motion.div
          className="space-y-12"
          variants={staggerContainer}
          {...inView}
        >
          {experiences.map(exp => (
            <motion.div
              key={exp.role}
              className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8"
              variants={staggerChild}
            >
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
