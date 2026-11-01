'use client';

import { motion } from 'framer-motion';
import { Layout, Server, Palette, Wrench } from 'lucide-react';
import { skillCategories } from '../lib/data';
import SectionLabel from './SectionLabel';
import GlassCard from './GlassCard';
import type { Skill } from '../types';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  layout: Layout,
  server: Server,
  palette: Palette,
  wrench: Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-background-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
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

        {/* Grid Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex: number) => {
            const Icon = iconMap[category.icon] || Layout;
            return (
              <motion.div 
                key={category.id} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: '-50px' }} 
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                <GlassCard className="h-full">
                  {/* Header Card (Ikon & Judul) */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2.5 rounded-lg bg-accent-cyan/10 text-accent-cyan">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-text-primary">
                      {category.title}
                    </h3>
                  </div>

                  {/* List Tags (Menggantikan Progress Bar) */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill: Skill, skillIndex: number) => (
                      <motion.span 
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.2 + skillIndex * 0.05 }}
                        className="px-3.5 py-1.5 rounded-md bg-white/[0.03] border border-white/[0.08] text-sm text-text-secondary hover:text-text-primary hover:border-accent-cyan/30 transition-colors cursor-default"
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}