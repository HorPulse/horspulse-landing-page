'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Cloud, Shield, BarChart3, Zap, Lock, Smartphone } from 'lucide-react'

const services = [
  {
    id: 1,
    icon: Cloud,
    title: 'Cloud Services',
    description: 'Scalable cloud infrastructure and services for your business needs'
  },
  {
    id: 2,
    icon: Shield,
    title: 'IT Solution',
    description: 'Comprehensive IT solutions tailored to your organization'
  },
  {
    id: 3,
    icon: BarChart3,
    title: 'Business Growth',
    description: 'Data-driven insights to accelerate your business growth'
  },
  {
    id: 4,
    icon: Lock,
    title: 'Security',
    description: 'Enterprise-grade security and compliance solutions'
  },
  {
    id: 5,
    icon: Zap,
    title: 'Performance',
    description: 'Optimize performance and reliability of your systems'
  },
  {
    id: 6,
    icon: Smartphone,
    title: 'Mobile Solutions',
    description: 'Native and cross-platform mobile applications'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-accent font-semibold text-sm uppercase tracking-wide mb-3"
          >
            Our Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-4"
          >
            We Provide The Best Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Comprehensive solutions designed to drive innovation and business success
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <motion.div key={service.id} variants={itemVariants}>
                <Card className="p-8 h-full hover:shadow-lg hover:border-accent/50 transition-all duration-300 bg-card border border-border hover:bg-gradient-to-br hover:from-card hover:to-accent/5 cursor-pointer group">
                  <div className="mb-4 inline-block p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
