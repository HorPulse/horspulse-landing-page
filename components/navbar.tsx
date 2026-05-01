"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import LogoWhite from "../public/logowhite.png";
import LogoBlack from "../public/Horspluse logo.png";

const navLinks = [
  { linkAdd: "services", name: "services", id: 1 },
  { linkAdd: "projects", name: "projects", id: 2 },
  { linkAdd: "team", name: "team", id: 3 },
  { linkAdd: "testimonials", name: "testimonials", id: 4 },
  { linkAdd: "contact", name: "contact", id: 5 },
] as const;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scroll = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = scrolled ? "text-black" : "text-white";

  const logo = scrolled ? LogoBlack : LogoWhite;

  return (
    <nav
      className={`fixed top-0 z-50 w-full lg:px-16 px-5 py-5 backdrop-blur transition-all duration-300 ${
        scrolled ? "bg-white/80 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center h-10">
        {/* LOGO SWITCH */}
        <Link href="/">
          <Image
            src={logo}
            alt="Horspulse Logo"
            className="w-28 transition-all duration-300"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scroll(link.linkAdd)}
                className={`font-mono text-[0.72rem] uppercase tracking-[0.1rem] cursor-pointer transition-colors ${textColor} hover:text-accent`}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA + Mobile */}
        <div className="flex items-center gap-4">
          <Button
            className="rounded-full px-8 py-4 text-sm font-bold tracking-wide text-white transition-all"
            style={{
              background: "linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)",
              boxShadow: "0 0 16px rgba(56,189,248,0.25)",
            }}
          >
            Start a Project
          </Button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden ${textColor}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden pt-4 space-y-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scroll(link.linkAdd)}
                className={`font-mono text-[0.72rem] uppercase tracking-[0.1rem] transition-colors ${textColor}`}
              >
                {link.name}
              </button>
            </li>
          ))}

          <Button
            variant="gradient"
            className="w-full mt-4 rounded-full text-white font-mono text-[0.72rem] uppercase tracking-widest"
          >
            Start a Project
          </Button>
        </ul>
      )}
    </nav>
  );
}
