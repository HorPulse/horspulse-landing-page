"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const words = ["Engineer", "Build", "Design", "Brand", "Scale"];

const bio = {
  intro:
  "We deliver end-to-end digital solutions that help organizations grow, transform, and operate efficiently. From strategy and product design to software engineering, infrastructure, and cybersecurity, we build systems that drive performance, innovation, and long-term value.",

  capabilities: [
    "Software Engineering",
    "Web & Mobile Development",
    "UX/UI Design",
    "Motion Graphics & Animation",
    "Brand Identity",
    "Digital Strategy",
    "IT Consulting",
    "Cybersecurity",
    "Managed IT Services",
    "AI Implementation",
  ],
};

export function Hero() {
  useScrollReveal();

  const [index, setIndex] = useState(0);
  const [bioIndex, setBioIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
      setBioIndex((prev) => (prev + 1) % bio.capabilities.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const letters = words[index].split("");
  const currentBio = bio.intro.split(" ");

  return (
    <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 px-8 lg:px-36 pb-20 gap-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://plus.unsplash.com/premium_photo-1681398842383-25f5613873b1?q=80&w=774&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat" />

      {/* Dark Overlay (controls readability) */}
      <div className="absolute inset-0 bg-black/60" />

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col justify-center lg:mt-26 mt-26"
      >
        <div className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-accent mb-7 flex items-center gap-2.5">
          <span className="block w-7 h-[1.5px] bg-accent" />
          Enterprise IT Solutions
        </div>

        <h1 className="font-cabinet font-black text-[clamp(3.4rem,5.5vw,6rem)] leading-[0.94] tracking-[-0.05em] text-white mb-8">
          We {/* Animated word */}
          <span className="inline-flex overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span key={words[index]} className="inline-flex">
                {letters.map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.05,
                    }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.span>
            </AnimatePresence>
          </span>
          <br />
          <span className="[-webkit-text-stroke:2px_#ffffff] text-transparent">
            Digital
          </span>
          <br />
          <span className="text-accent">Excellence</span>
        </h1>

        <p className=" text-white max-w-[560px] mb-4">
          {/* Intro animated (word by word) */}
          {currentBio.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
              className="inline-block mr-[6px]"
            >
              {word}
            </motion.span>
          ))}

          <br />
          <br />

          {/* Rotating capabilities */}
          <span className="text-white font-medium">
            <AnimatePresence mode="wait">
              <motion.span
                key={bio.capabilities[index]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-accent inline-block"
              >
                {bio.capabilities[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </p>

        <div className="flex gap-3.5 flex-wrap">
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="font-mono text-[0.75rem] uppercase tracking-[0.08em] px-8 py-4 bg-white text-black border-2 border-white hover:bg-accent hover:border-accent transition-all flex items-center gap-2.5 rounded-full"
          >
            View Our Work <span>→</span>
          </button>

          <button
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-full font-mono text-[0.75rem] uppercase tracking-[0.08em] px-8 py-4 bg-transparent text-white border-2 border-white hover:border-accent transition-all"
          >
            Our Services
          </button>
        </div>
      </motion.div>

      {/* RIGHT — RING GRAPHIC */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 hidden lg:flex items-center justify-center lg:mt-26 mt-26"
      >
        <div className="relative w-full max-w-[480px] aspect-square">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-white/40"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[15%] rounded-full border border-white/30"
          />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[30%] rounded-full border border-white/20"
          />

          {/* Center */}
          <div className="absolute inset-[38%] bg-accent rounded-full flex items-center justify-center">
            <svg
              viewBox="0 0 40 40"
              className="w-9 h-9 fill-none stroke-white stroke-2"
            >
              <polyline
                points="6,20 16,30 34,12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Stats */}
          <div className="absolute top-[8%] -left-[4%] bg-white/10 backdrop-blur px-5 py-4">
            <div className="font-cabinet font-black text-[1.6rem] text-white leading-none">
              30<span className="text-accent">+</span>
            </div>
            <div className="font-mono text-[0.62rem] text-white/70 uppercase tracking-widest mt-1">
              Projects Delivered
            </div>
          </div>

          <div className="absolute bottom-[12%] -right-[4%] bg-white/10 backdrop-blur px-5 py-4">
            <div className="font-cabinet font-black text-[1.6rem] text-white leading-none">
              99<span className="text-accent">.9%</span>
            </div>
            <div className="font-mono text-[0.62rem] text-white/70 uppercase tracking-widest mt-1">
              Uptime Guarantee
            </div>
          </div>

          <div className="absolute top-1/2 -left-[10%] -translate-y-1/2 bg-white/10 backdrop-blur px-5 py-4">
            <div className="font-cabinet font-black text-[1.6rem] text-white leading-none">
              6<span className="text-accent">yr</span>
            </div>
            <div className="font-mono text-[0.62rem] text-white/70 uppercase tracking-widest mt-1">
              In Business
            </div>
          </div>
        </div>
      </motion.div>

      {/* SCROLL HINT */}
      <div className="absolute bottom-9 left-16 flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-white z-10">
        <div className="w-10 h-px bg-white" />
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
