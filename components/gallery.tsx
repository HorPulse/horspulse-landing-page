'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
// import Image from 'next/image'

const galleryItems = [
  {
    id: 1,
    title: 'Enterprise Dashboard',
    category: 'Platform'
  },
  {
    id: 2,
    title: 'Cloud Infrastructure',
    category: 'Infrastructure'
  },
  {
    id: 3,
    title: 'Analytics Platform',
    category: 'Analytics'
  },
  {
    id: 4,
    title: 'Mobile App',
    category: 'Mobile'
  },
  {
    id: 5,
    title: 'Security Suite',
    category: 'Security'
  },
]

export function Gallery() {
  return (
    <section id="projects" className="py-20 md:py-32 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-accent font-semibold text-sm uppercase tracking-wide mb-3"
          >
            Recent Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-4"
          >
            Our Latest Projects
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden group cursor-pointer h-64 md:h-72 border-border hover:border-accent/50 transition-all duration-300 flex flex-col">
                <div className="flex-1 bg-gradient-to-br from-accent/20 via-accent/10 to-background flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="text-center z-10">
                    <div className="w-16 h-16 rounded-full bg-accent/30 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-accent">{item.id}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-card border-t border-border">
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.category}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional project row */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[6, 7, 8, 9].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: (item - 6) * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="aspect-square bg-gradient-to-br from-accent/10 to-background border-border hover:border-accent/50 transition-all flex items-center justify-center group cursor-pointer">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">{item}</div>
                  <p className="text-xs text-muted-foreground mt-2">Project</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
