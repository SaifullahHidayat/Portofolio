'use client';

import { useState } from 'react';
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../lib/data';
import SectionLabel from './SectionLabel';
import { cn } from '../lib/utils';

type Category = 'all' | 'web' | 'mobile' | 'design' | 'open-source';

const categories: { label: string; value: Category }[] = [
  { label: 'All', value: 'all' },
  { label: 'Web App', value: 'web' },
  { label: 'Mobile', value: 'mobile' },
  { label: 'Design', value: 'design' },
  { label: 'Open Source', value: 'open-source' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Category>('all');
  const filteredProjects = activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 md:py-32 bg-background-primary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <SectionLabel text="Portfolio" className="justify-center" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-8">Featured Projects</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button key={cat.value} onClick={() => setActiveFilter(cat.value)} className={cn('px-4 py-2 rounded-full text-sm font-medium transition-all duration-300', activeFilter === cat.value ? 'bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30' : 'text-text-secondary hover:text-text-primary border border-transparent hover:bg-white/5')}>
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index: number) => (
              <motion.div key={project.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4, delay: index * 0.1 }} className="group">
                <div className="rounded-2xl bg-background-tertiary border border-white/[0.06] overflow-hidden hover:border-accent-cyan/30 hover:shadow-glow transition-all duration-300">
                  <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 to-accent-purple/10" />
                    <div className="absolute inset-0 bg-background-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-accent-cyan text-background-primary hover:scale-110 transition-transform" aria-label="View live demo"><ExternalLink className="w-5 h-5" /></a>}
                      {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 text-text-primary border border-white/20 hover:bg-white/20 transition-colors" aria-label="View source code"><FaGithub className="w-5 h-5" /></a>}
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-accent-purple/10 text-accent-purple border border-accent-purple/20">{project.category}</span>
                    <h3 className="font-display text-lg font-semibold text-text-primary mt-3 mb-2 group-hover:text-accent-cyan transition-colors">{project.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech: string) => (
                        <span key={tech} className="text-xs text-text-tertiary bg-white/5 px-2 py-1 rounded-md">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}