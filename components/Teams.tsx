"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaBehance } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

type Social = {
  icon: React.ReactNode;
  href: string;
  label: string;
};

type TeamMember = {
  initial: string;
  gradient: string;
  name: string;
  role: string;
  bio: string;
  socials: Social[];
};

const TEAM: TeamMember[] = [
  {
    initial: "E",
    gradient: "linear-gradient(160deg, #1D5EFF 0%, #4B83FF 60%, #93c5fd 100%)",
    name: "Emmanuel Owunari Horsfall",
    role: "CEO & Co-Founder",
    bio: "15 years leading enterprise IT transformations across finance and healthcare sectors.",
    socials: [
      { icon: <FaLinkedinIn />, href: "https://linkedin.com/in/", label: "LinkedIn" },
      { icon: <FaXTwitter />,   href: "https://x.com/",           label: "X / Twitter" },
    ],
  },
  {
    initial: "A",
    gradient: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 60%, #2563eb 100%)",
    name: "Abiye Desire Omiete",
    role: "CTO & Co-Founder",
    bio: "Full-stack architect with deep expertise in cloud-native systems and developer tooling.",
    socials: [
      { icon: <FaLinkedinIn />, href: "https://linkedin.com/in/", label: "LinkedIn" },
      { icon: <FaXTwitter />,   href: "https://x.com/",           label: "X / Twitter" },
      { icon: <FaGithub />,     href: "https://github.com/",      label: "GitHub" },
    ],
  },
  {
    initial: "D",
    gradient: "linear-gradient(160deg, #0c4a6e 0%, #0369a1 60%, #38bdf8 100%)",
    name: "David Alban",
    role: "Technical Lead & Co-Founder",
    bio: "Former AWS principal engineer. Architect of systems serving millions of requests daily.",
    socials: [
      { icon: <FaLinkedinIn />, href: "https://linkedin.com/in/", label: "LinkedIn" },
      { icon: <FaGithub />,     href: "https://github.com/",      label: "GitHub" },
    ],
  },
  {
    initial: "S",
    gradient: "linear-gradient(160deg, #1e1b4b 0%, #4338ca 60%, #818cf8 100%)",
    name: "Solomon Udoh",
    role: "Product Designer",
    bio: "Crafts intuitive, beautiful interfaces that align user needs with business outcomes.",
    socials: [
      { icon: <FaLinkedinIn />, href: "https://linkedin.com/in/", label: "LinkedIn" },
      { icon: <FaXTwitter />,   href: "https://x.com/",           label: "X / Twitter" },
      { icon: <FaBehance />,    href: "https://behance.net/",     label: "Behance" },
    ],
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: EASE },
  }),
};

export function Teams() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="team"
      ref={ref}
      className="relative overflow-hidden bg-[#F6F8FF] px-8 py-24 lg:px-16"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(29,94,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(29,94,255,0.035) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-[440px] w-[440px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(29,94,255,0.07) 0%, transparent 65%)" }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* ── Header ── */}
        <div className="mb-14 flex flex-wrap items-end justify-between gap-7">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -14 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, ease: EASE }}
              className="mb-3 flex items-center gap-2"
            >
              <span className="block h-[2px] w-5 bg-blue-600" />
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-blue-600">
                The people
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.07, ease: EASE }}
              className="font-black leading-[1.04] tracking-[-0.04em] text-black"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
            >
              Meet the{" "}
              <span className="text-blue-600">Team</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15, ease: EASE }}
            className="max-w-sm text-[15px] leading-[1.8]"
          >
            Experienced engineers, architects, and strategists — united by a
            commitment to building things that last.
          </motion.p>
        </div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-4">
          {TEAM.map((m, i) => (
            <motion.div
              key={m.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{
                y: -6,
                boxShadow: "0 16px 48px rgba(29,94,255,0.13)",
                borderColor: "rgba(29,94,255,0.28)",
              }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden rounded-2xl border bg-white"
              style={{ borderColor: "rgba(5,8,15,0.09)" }}
            >
              {/* ── Avatar area ── */}
              <div
                className="relative flex h-[200px] items-end justify-center overflow-hidden"
                style={{ background: m.gradient }}
              >
                {/* Dot mesh overlay */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.17) 1px, transparent 1px)",
                    backgroundSize: "18px 18px",
                  }}
                />

                {/* Role badge */}
                <div
                  className="absolute right-3 top-3 z-10 rounded-md border px-2 py-1 font-mono text-[7.5px] font-medium uppercase tracking-[0.1em] text-[#05080F] backdrop-blur-md"
                  style={{
                    background: "rgba(255,255,255,0.88)",
                    borderColor: "rgba(255,255,255,0.6)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {m.role}
                </div>

                {/* Initial pill */}
                <div
                  className="relative z-10 flex h-[126px] w-[100px] items-start justify-center rounded-t-[50px] pt-[18px]"
                  style={{
                    background: "rgba(255,255,255,0.2)",
                    border: "1px solid rgba(255,255,255,0.35)",
                    borderBottom: "none",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <span
                    className="select-none font-black leading-none"
                    style={{
                      fontSize: 52,
                      color: "rgba(255,255,255,0.92)",
                      textShadow: "0 2px 12px rgba(0,0,0,0.18)",
                    }}
                  >
                    {m.initial}
                  </span>
                </div>
              </div>

              {/* ── Card body ── */}
              <div className="px-5 pb-5 pt-4">
                <h3
                  className="mb-0.5 font-extrabold leading-snug tracking-[-0.02em] text-[#05080F]"
                  style={{ fontSize: 14.5 }}
                >
                  {m.name}
                </h3>
                <p
                  className="mb-2.5 font-mono text-[8.5px] font-medium uppercase tracking-[0.12em] text-blue-600"
                >
                  {m.role}
                </p>
                <p className="mb-3.5 text-[12.5px] leading-[1.7]" style={{ color: "rgba(5,8,15,0.52)" }}>
                  {m.bio}
                </p>

                {/* Divider */}
                <div className="mb-3.5 h-px" style={{ background: "rgba(5,8,15,0.08)" }} />

                {/* Social icons */}
                <div className="flex gap-2">
                  {m.socials.map((s) => (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "#1D5EFF",
                        borderColor: "#1D5EFF",
                        color: "#fff",
                        y: -2,
                        boxShadow: "0 4px 14px rgba(29,94,255,0.35)",
                      }}
                      whileTap={{ scale: 0.92 }}
                      transition={{ duration: 0.18 }}
                      className="flex h-[30px] w-[30px] items-center justify-center rounded-lg border text-[13px]"
                      style={{
                        borderColor: "rgba(5,8,15,0.1)",
                        color: "rgba(5,8,15,0.5)",
                        background: "#F6F8FF",
                      }}
                    >
                      {s.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}