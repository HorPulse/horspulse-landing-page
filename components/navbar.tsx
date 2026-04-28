'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  {
    linkAdd:"#services",
    name: "services",
    id: 1,
  }, 
  {
    linkAdd:"#projects",
    name: "projects",
    id: 2
  }, 
  {
    linkAdd:"#team",
    name: "team",
    id: 3
  }, 
  {
    linkAdd:"#testimonials",
    name: "testimonials",
    id: 4
  },
  {
    linkAdd:"#contact",
    name: "contact",
    id: 5
  }] as const

export function Navbar() {
  const scroll = (id: string) => 
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed right-0 top-0 z-200 px-16 py-5.5 bg-background/95 backdrop-blur border-b border-border w-full">
      
        <div className="flex justify-between items-center h-16">

        <Link href="/" className="font-cabinet font-black text-[1.35rem] tracking-[-0.04em] text-ink">Hors<span className="text-accent">pulse</span> </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {
              navLinks.map((link) => (
            <li key={link.id}>
              <button 
              onClick={() => scroll(link.linkAdd)}
              className="font-mono text-[0.72rem] uppercase tracking-[0.1rem] text-ink2 cursor-pointer hover:text-accent transition-colors"
              >
                {link.name}
              </button>
            </li>
          ))
        }
          </ul>

          {/* CTA and Menu */}
          <div className="flex items-center gap-4">
            <Button className="hidden sm:inline-flex font-mono text-[0.72rem] uppercase tracking-widest px-6 py-2.75 bg-ink text-bg cursor-pointer hover:bg-accent transition-colors">
              Start a Project
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          </div>
        
        {/* Mobile Navigation */}
         {isOpen && (
          <ul className="md:hidden pb-4 border-t border-border">
                        {
              navLinks.map((link) => (
            <li key={link.id}>
              <button 
              onClick={() => scroll(link.linkAdd)}
              className="font-mono text-[0.72rem] uppercase tracking-[0.1rem] text-ink2 cursor-pointer hover:text-accent transition-colors"
              >
                {link.name}
              </button>
            </li>
          ))
        }
            {/* <Link
              href="#services"
              className="block py-2 text-muted-foreground hover:text-foreground transition"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#projects"
              className="block py-2 text-muted-foreground hover:text-foreground transition"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#about"
              className="block py-2 text-muted-foreground hover:text-foreground transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link> */}
            <Button className="w-full mt-4 rounded-full bg-primary text-primary-foreground">
              Start a project
            </Button>
          </ul>
        )}

    </nav>
  )
}
