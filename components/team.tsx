'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const team = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'CEO & Founder',
    initials: 'SJ'
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'CTO & Lead Engineer',
    initials: 'MC'
  },
  {
    id: 3,
    name: 'Emma Davis',
    title: 'Head of Solutions',
    initials: 'ED'
  },
  {
    id: 4,
    name: 'David Martinez',
    title: 'Lead Architect',
    initials: 'DM'
  }
]

export function Team() {
  return (
    <section id="about" className="py-20 md:py-32 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-accent font-semibold text-sm uppercase tracking-wide mb-3"
          >
            Our Team
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-4"
          >
            Meet Our Expert Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Talented professionals dedicated to delivering exceptional results
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center hover:shadow-lg hover:border-accent/50 transition-all duration-300 bg-card border border-border cursor-pointer">
                <div className="flex justify-center mb-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.initials}`} />
                    <AvatarFallback className="bg-accent text-accent-foreground">{member.initials}</AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.title}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Team Section Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-muted/50 rounded-2xl border border-border text-center"
        >
          <h3 className="text-xl font-bold text-foreground mb-3">Looking For an Experienced IT Partner?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
            Join our collective of tech-savvy professionals and passionate specialists. We bring expertise, innovation, and strategic thinking to every project.
          </p>
          <button className="inline-flex px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition">
            Join Our Team
          </button>
        </motion.div>
      </div>
    </section>
  )
}
