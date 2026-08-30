'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '../lib/data'
import Image from 'next/image'
import SectionLabel from '../components/SectionLabel'
import AnimatedCounter from '../components/AnimatedCounter'
import GlassCard from '../components/GlassCard'

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background-primary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 relative"
          >
            <div className="relative p-[1px] rounded-2xl
                bg-gradient-to-br from-accent-cyan
                via-accent-cyan/30
                to-accent-purple
                shadow-[0_0_35px_rgba(34,211,238,0.12)]">

  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-black">

    <Image
      src="/assets/porto.png"
      alt="Profile Photo"
      fill
      className="object-cover"
    />

    <div className="absolute inset-0 bg-gradient-to-br
                    from-accent-cyan/10
                    via-transparent
                    to-accent-purple/15
                    pointer-events-none" />

  </div>

</div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-4 -right-4 md:bottom-8 md:-right-8 glass rounded-xl px-4 py-3"
            >
              <div className="text-2xl font-display font-bold text-accent-cyan">5+</div>
              <div className="text-xs text-text-secondary">Years Exp.</div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel text="About Me" />
              
              <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-6">
                Crafting digital experiences with passion
              </h2>

              <div className="space-y-4 text-text-secondary leading-relaxed mb-10">
                {personalInfo.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {personalInfo.stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <GlassCard className="text-center p-5" hover={false}>
                      <div className="font-display text-2xl md:text-3xl font-bold text-accent-cyan mb-1">
                        <AnimatedCounter target={stat.value} suffix="+" />
                      </div>
                      <div className="text-xs text-text-secondary uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}