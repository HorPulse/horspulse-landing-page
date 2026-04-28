'use client'

import { motion } from 'framer-motion'
// import { Card } from '@/components/ui/card'

const stats = [
  {
    id: 1,
    percentage: '250+',
    label: 'Clients Worldwide'
  },
  {
    id: 2,
    percentage: '90%',
    label: 'Customer Satisfaction'
  },
  {
    id: 3,
    percentage: '50+',
    label: 'Expert Team Members'
  },
  {
    id: 4,
    percentage: '99%',
    label: 'System Uptime'
  }
]

export function Stats() {
  return (
    <section className="py-20 md:py-32 px-4 bg-foreground text-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Trusted By Enterprises Worldwide
          </h2>
          <p className="text-background/80 text-lg max-w-2xl mx-auto">
            Our proven track record of delivering excellence and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-background/10 rounded-lg p-8 backdrop-blur-sm border border-background/20 hover:bg-background/20 transition-colors">
                <div className="text-3xl md:text-5xl font-bold text-accent mb-3">
                  {stat.percentage}
                </div>
                <p className="text-background/90 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
