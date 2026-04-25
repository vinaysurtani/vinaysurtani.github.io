import { GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerChild, inView } from '@/lib/motionVariants'

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
        <motion.p
          className="font-mono text-xs tracking-widest text-muted-foreground uppercase"
          variants={fadeUp}
          {...inView}
        >
          About
        </motion.p>

        <motion.div
          className="mt-8 grid gap-12 md:grid-cols-2"
          variants={staggerContainer}
          {...inView}
        >
          <motion.div variants={staggerChild}>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
              I build at the GenAI layer.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a software engineer with 4+ years of industry experience specializing in
                GenAI and agentic systems, currently doing my master's in Computer Science at SDSU.
              </p>
              <p>
                At the CARE Lab, I design and ship agentic pipelines — fine-tuned LLMs, autonomous
                workflows, and multi-step orchestration across real tools and APIs. Before that,
                I spent 3 years at Cognizant building NL2SQL systems, RAG pipelines, and LLM-powered
                infrastructure for Fortune 500 clients.
              </p>
              <p>
                My focus is the full stack of GenAI: from the model and retrieval layer down to
                the production infrastructure that makes it reliable.
              </p>
            </div>
          </motion.div>

          <motion.div variants={staggerChild}>
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
