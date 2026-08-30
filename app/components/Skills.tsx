'use client'

import { motion } from 'framer-motion'
import { Layout, Server, Palette, Wrench } from 'lucide-react'
import { skillCategories } from '../lib/data'
import SectionLabel from '../components/SectionLabel'
import GlassCard from '../components/GlassCard'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  layout: Layout,
  server: Server,
  palette: Palette,
  wrench: Wrench,
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-background-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionLabel text="Tech Stack" className="justify-center" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Tools & Technologies I Work With
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            My tech stack is carefully chosen to deliver high-performance, scalable, and maintainable applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => {
            const Icon = iconMap[category.icon] || Layout
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                <GlassCard>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 rounded-lg bg-accent-cyan/10 text-accent-cyan">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-text-primary">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1.5">
                          <span className="text-sm text-text-secondary">{skill.name}</span>
                          <span className="text-sm text-text-tertiary">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 1, 
                              delay: 0.3 + skillIndex * 0.1,
                              ease: 'easeOut'
                            }}
                            className="h-full rounded-full bg-gradient-accent"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}