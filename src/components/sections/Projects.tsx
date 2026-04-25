import { useEffect, useState } from 'react'
import { ExternalLink, Star, GitFork } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerChild, inView } from '@/lib/motionVariants'

interface Repo {
  id: number | string
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  stargazers_count: number
  forks_count: number
  topics: string[]
  language: string | null
}

const featuredProjects = [
  {
    name: 'PrepPal',
    description:
      'Agent-driven AI interview coach built for the AWS x SDSU AI Hackathon. Real-time body language analysis via webcam, AWS Polly for text-to-speech feedback, and DynamoDB for session management. Won 1st place.',
    tags: ['AWS Bedrock', 'Python', 'DynamoDB', 'AWS Polly'],
    badge: '🏆 1st Place — AWS x SDSU Hackathon',
    githubUrl: 'https://github.com/vinaysurtani/preppal',
  },
  {
    name: 'ReLink',
    description:
      'Digital identity platform for social inclusion targeting undocumented individuals. QR-based verification and record management with GeoJSON heatmaps from census data and TensorFlow facial recognition via DeepFace.',
    tags: ['Next.js', 'FastAPI', 'PostgreSQL', 'TensorFlow'],
    githubUrl: 'https://github.com/vinaysurtani/relink',
  },
  {
    name: 'Nimbus',
    description:
      'Cloud-native AI microservices platform with a RAG pipeline using Qdrant, BGE embeddings, and Claude. Go API gateway with Redis caching and automated CI/CD via GitHub Actions, Docker, and Kubernetes.',
    tags: ['Go', 'FastAPI', 'Qdrant', 'Claude', 'Kubernetes'],
    githubUrl: 'https://github.com/vinaysurtani/nimbus',
  },
]

export function Projects() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Try pinned repos JSON first (generated at build time in CI)
    fetch('/pinned-repos.json')
      .then(r => {
        if (!r.ok) throw new Error('pinned-repos.json not found')
        return r.json()
      })
      .then((data: Repo[]) => {
        setRepos(data)
        setLoading(false)
      })
      .catch(() => {
        // Fallback: REST API sorted by recently updated (local dev)
        fetch('https://api.github.com/users/vinaysurtani/repos?sort=updated&per_page=6')
          .then(r => r.json())
          .then((data: Repo[]) => {
            setRepos(
              data
                .filter((r: Repo) => !r.name.includes('vinaysurtani.github.io'))
                .slice(0, 6)
            )
          })
          .catch(() => setRepos([]))
          .finally(() => setLoading(false))
      })
  }, [])

  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.p
          className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-8"
          variants={fadeUp}
          {...inView}
        >
          Projects
        </motion.p>

        {/* Featured */}
        <motion.div
          className="grid gap-4 md:grid-cols-3 mb-16"
          variants={staggerContainer}
          {...inView}
        >
          {featuredProjects.map(proj => (
            <motion.div
              key={proj.name}
              className="rounded-lg border border-border bg-card p-5 flex flex-col gap-3 hover:border-foreground/20 transition-colors"
              variants={staggerChild}
            >
              {proj.badge && (
                <span className="text-xs font-mono text-muted-foreground">{proj.badge}</span>
              )}
              <h3 className="font-medium text-foreground">{proj.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {proj.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {proj.tags.map(tag => (
                  <span
                    key={tag}
                    className="rounded-md bg-accent px-2 py-0.5 text-xs text-muted-foreground font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {proj.githubUrl && (
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors mt-1"
                >
                  <ExternalLink size={11} />
                  View on GitHub
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub repos */}
        {(loading || repos.length > 0) && (
          <>
            <motion.div
              className="flex items-center gap-3 mb-6"
              variants={fadeUp}
              {...inView}
            >
              <p className="text-sm font-medium text-foreground">From GitHub</p>
              <div className="h-px flex-1 bg-border" />
              <a
                href="https://github.com/vinaysurtani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
              >
                View all <ExternalLink size={11} />
              </a>
            </motion.div>

            {loading ? (
              <div className="grid gap-3 md:grid-cols-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-24 rounded-lg bg-muted animate-pulse" />
                ))}
              </div>
            ) : (
              <motion.div
                className="grid gap-3 md:grid-cols-2"
                variants={staggerContainer}
                {...inView}
              >
                {repos.map(repo => (
                  <motion.a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-border bg-card p-4 hover:border-foreground/20 transition-colors group"
                    variants={staggerChild}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-medium text-foreground group-hover:underline underline-offset-2">
                        {repo.name}
                      </p>
                      <ExternalLink size={13} className="text-muted-foreground shrink-0 mt-0.5" />
                    </div>
                    {repo.description && (
                      <p className="text-xs text-muted-foreground mt-2 leading-relaxed line-clamp-2">
                        {repo.description}
                      </p>
                    )}
                    <div className="flex items-center gap-3 mt-3">
                      {repo.language && (
                        <span className="text-xs text-muted-foreground font-mono">
                          {repo.language}
                        </span>
                      )}
                      {repo.stargazers_count > 0 && (
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Star size={11} /> {repo.stargazers_count}
                        </span>
                      )}
                      {repo.forks_count > 0 && (
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <GitFork size={11} /> {repo.forks_count}
                        </span>
                      )}
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            )}
          </>
        )}
      </div>
    </section>
  )
}
