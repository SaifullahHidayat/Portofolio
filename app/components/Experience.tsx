'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { experiences } from '../lib/data'
import SectionLabel from '../components/SectionLabel'
import { cn } from '../lib/utils'

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-background-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionLabel text="Experience" className="justify-center" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary">
            My Journey
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan/50 via-accent-purple/30 to-transparent md:-translate-x-px" />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0
            
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={cn(
                  'relative flex items-start md:items-center mb-12 last:mb-0',
                  'flex-col md:flex-row',
                  isLeft ? 'md:flex-row-reverse' : ''
                )}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent-cyan border-2 border-background-secondary md:-translate-x-1.5 mt-1.5 md:mt-0 z-10" 
                     style={{ boxShadow: '0 0 10px rgba(0,240,255,0.5)' }} />

                {/* Date (Desktop) */}
                <div className={cn(
                  'hidden md:block w-1/2 px-8',
                  isLeft ? 'text-right' : 'text-left'
                )}>
                  <span className="text-sm font-medium text-accent-cyan">{exp.dateRange}</span>
                </div>

                {/* Content Card */}
                <div className={cn(
                  'w-full md:w-1/2 pl-12 md:pl-8',
                  isLeft ? 'md:pr-8 md:pl-0' : 'md:pl-8'
                )}>
                  <div className="rounded-2xl bg-background-tertiary border border-white/[0.06] p-6
                                  hover:border-accent-cyan/20 transition-all duration-300">
                    {/* Date (Mobile) */}
                    <span className="md:hidden text-sm font-medium text-accent-cyan mb-2 block">
                      {exp.dateRange}
                    </span>
                    
                    <h3 className="font-display text-lg font-semibold text-text-primary mb-1">
                      {exp.role}
                    </h3>
                    
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-accent-purple hover:text-accent-cyan transition-colors mb-4"
                    >
                      {exp.company}
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="text-sm text-text-secondary leading-relaxed flex gap-2">
                          <span className="text-accent-cyan mt-1.5">•</span>
                          {desc}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs text-text-tertiary bg-white/5 px-2 py-1 rounded-md border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}