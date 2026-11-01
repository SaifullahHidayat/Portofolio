'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Circle } from 'lucide-react';
import { personalInfo } from '../lib/data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
} as const;

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center border-b border-border-subtle pt-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 w-full">
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate="visible" 
          className="flex flex-col items-start text-left"
        >
          {/* Status Badge (Minimalis) */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-background-secondary border border-border-subtle text-text-secondary text-sm font-mono">
              <Circle className="w-2.5 h-2.5 fill-success text-success animate-pulse" />
              Available for work
            </span>
          </motion.div>

          {/* Headline Utama (Tanpa Gradien) */}
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary mb-6">
            Hi, I&apos;m {personalInfo.name}.<br />
            <span className="text-text-secondary">
              {personalInfo.tagline}
            </span>
          </motion.h1>

          {/* Deskripsi */}
          <motion.p variants={itemVariants} className="text-lg text-text-secondary max-w-2xl mb-10 leading-relaxed">
            Saya membangun aplikasi web modern dengan fokus pada performa, skalabilitas, dan pengalaman pengguna yang bersih. Mengubah masalah kompleks menjadi solusi elegan.
          </motion.p>

          {/* Tombol Aksi (Solid & Tegas) */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto">
            <a 
              href="#projects" 
              className="px-6 py-3 rounded-md bg-text-primary text-background-primary font-medium hover:bg-gray-300 transition-colors flex items-center justify-center gap-2"
            >
              Lihat Karya Saya
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-md border border-border-strong text-text-primary font-medium hover:bg-background-secondary transition-colors flex items-center justify-center"
            >
              Hubungi Saya
            </a>
          </motion.div>

          {/* Sosial Media (Teks Minimalis) */}
          <motion.div variants={itemVariants} className="flex items-center gap-6 pt-6 border-t border-border-subtle w-full">
            <span className="text-sm font-mono text-text-tertiary uppercase tracking-wider">
              Connect:
            </span>
            <div className="flex gap-4">
              {personalInfo.socials.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-text-secondary hover:text-text-primary transition-colors text-sm font-medium"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}