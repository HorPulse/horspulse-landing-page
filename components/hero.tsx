'use client'

import { motion } from 'framer-motion'
// import { Button } from '@/components/ui/button'
// import { ArrowRight } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export function Hero() {
  useScrollReveal()

  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 px-8 lg:px-36 lg:mt-24 mt-0 pb-20  gap-16 relative overflow-hidden">
      {/* Gradient background effect */}
      {/* <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-blue-50 via-background to-background" />
      
      {/* <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Excellent IT Solution <br className="hidden sm:block" />
            For Your Business
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive cloud services and IT solutions to drive your business growth and digital transformation.
          </p> */}

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 group">
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full border-border text-foreground hover:bg-muted"
            >
              Learn More
            </Button>
          </div>
        </motion.div> */} 
          
        {/* Left */}
      <motion.div           
      initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
           className="flex flex-col justify-center">
       
        <div className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-accent mb-7 flex items-center gap-2.5">
          <span className="block w-7 h-[1.5px] bg-accent" />
          Enterprise IT Solutions
        </div>

        <h1 className="font-cabinet font-black text-[clamp(3.4rem,5.5vw,6rem)] leading-[0.94] tracking-[-0.05em] text-ink mb-8">
          We Engineer
          <br />
          <span className="[--stroke:2px] [-webkit-text-stroke:2px_#0f0f0e] text-transparent">Digital</span>
          <br />
          <span className="text-accent">Excellence</span>
        </h1>

        <p className="text-[1.05rem] leading-[1.8] text-ink2 max-w-105 mb-12">
          From cloud infrastructure to custom software platforms — we build the technology that
          powers ambitious organizations. Reliable, secure, scalable.
        </p>

        <div className="flex gap-3.5 flex-wrap">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="font-mono text-[0.75rem] uppercase tracking-[0.08em] px-8 py-4 bg-ink text-bg border-2 border-ink cursor-none hover:bg-accent hover:border-accent transition-all flex items-center gap-2.5"
          >
            View Our Work <span>→</span>
          </button>
          <button
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            className="font-mono text-[0.75rem] uppercase tracking-[0.08em] px-8 py-4 bg-transparent text-ink border-2 border-border cursor-none hover:border-ink transition-all"
          >
            Our Services
          </button>
        </div>

      </motion.div>

      {/* Right — graphic */}
      <motion.div
              initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
      className="hidden lg:flex items-center justify-center">
        <div className="relative w-full max-w-120 aspect-square">
          {/* Rings */}
          <div className="hg-c1 absolute inset-0 rounded-full border border-border" />
          <div className="hg-c2 absolute inset-[15%] rounded-full border border-border" />
          <div className="hg-c3 absolute inset-[30%] rounded-full border border-border" />
          {/* Center */}
          <div className="absolute inset-[38%] bg-accent rounded-full flex items-center justify-center">
            <svg viewBox="0 0 40 40" className="w-9 h-9 fill-none stroke-white stroke-2">
              <polyline points="6,20 16,30 34,12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          {/* Stats */}
          <div className="absolute top-[8%] -left-[4%] bg-card border border-border px-5.5 py-4">
            <div className="font-cabinet font-black text-[1.6rem] text-ink leading-none">
              340<span className="text-accent">+</span>
            </div>
            <div className="font-mono text-[0.62rem] uppercase tracking-widest text-muted mt-1">Projects Delivered</div>
          </div>
          <div className="absolute bottom-[12%] -right-[4%] bg-card border border-border px-5.5 py-4">
            <div className="font-cabinet font-black text-[1.6rem] text-ink leading-none">
              99<span className="text-accent">.9%</span>
            </div>
            <div className="font-mono text-[0.62rem] uppercase tracking-widest text-muted mt-1">Uptime Guarantee</div>
          </div>
          <div className="absolute top-1/2 -left-[10%] -translate-y-1/2 bg-card border border-border px-5.5 py-4">
            <div className="font-cabinet font-black text-[1.6rem] text-ink leading-none">
              12<span className="text-accent">yr</span>
            </div>
            <div className="font-mono text-[0.62rem] uppercase tracking-widest text-muted mt-1">In Business</div>
          </div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <div className="absolute bottom-9 left-16 flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted">
        <div className="scroll-line w-10 h-px bg-muted" />
        <span>Scroll to explore</span>
      </div>

        {/* Phone Mockup Style Container */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 md:mt-24 max-w-2xl mx-auto"
        > */}
          {/* <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-card border border-border"> */}
            {/* Notch */}
            {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-foreground rounded-b-2xl z-20" /> */}
            
            {/* Device frame */}
            {/* <div className="bg-gradient-to-br from-muted to-background p-1">
              <div className="bg-card rounded-2xl overflow-hidden aspect-video md:aspect-auto md:h-96 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-accent/10 flex flex-col items-center justify-center p-8">
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">IT Solution Platform</h3>
                    <p className="text-muted-foreground max-w-sm">Cloud-based services for enterprise growth</p>
                    <div className="flex gap-2 justify-center pt-2">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <div className="w-2 h-2 rounded-full bg-accent/50" />
                      <div className="w-2 h-2 rounded-full bg-accent/30" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div> */}


    </section>
  )
}
