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
    <section id="skills" className="py-24 md:py-32 bg-background-primary relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: '-100px' }} 
          transition={{ duration: 0.5 }} 
          className="text-center mb-16"
        >
          <SectionLabel text="Tech Stack" className="justify-center" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Tools & Technologies
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Teknologi yang saya gunakan sehari-hari untuk membangun aplikasi yang cepat dan skalabel.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex: number) => {
            const Icon = iconMap[category.icon] || Layout;
            return (
              <motion.div 
                key={category.id} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: '-50px' }} 
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                <GlassCard className="h-full p-8">
                  {/* Card Header */}
                  <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/[0.05]">
                    <div className="p-3 rounded-xl bg-background-tertiary border border-white/[0.05] text-text-primary shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-text-primary tracking-tight">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Grid (2 Kolom) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                    {category.skills.map((skill: Skill, skillIndex: number) => (
                      <motion.div 
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 + (skillIndex * 0.05) }}
                        className="flex items-center gap-3 group"
                      >
                        {/* Dot indikator minimalis dengan efek hover gradient */}
                        <div className="w-2 h-2 rounded-full bg-text-tertiary group-hover:bg-accent-cyan transition-colors duration-300" />
                        <span className="text-base text-text-secondary group-hover:text-text-primary transition-colors duration-300 font-medium">
                          {skill.name}
                        </span>
                      </motion.div>
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