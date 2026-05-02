"use client";

import { useRef, useState } from "react";
import {
  motion,
  useInView,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";

const TESTI = [
  {
    av: "MR",
    avBg: "#1a4fd4",
    name: "Marcus Reid",
    role: "CTO — Vantage Logistics",
    location: "Lagos, NG",
    quote:
      "HorsPulse completely overhauled our legacy infrastructure in under three months. Zero downtime during migration, 40% reduction in cloud costs. Genuinely exceptional execution.",
  },
  {
    av: "SL",
    avBg: "#d4501a",
    name: "Sophia Laurent",
    role: "Head of IT — Finara Group",
    location: "Abuja, NG",
    quote:
      "The security audit they ran surfaced vulnerabilities our in-house team missed for two years. Their remediation process was systematic, fast, and thorough. We sleep better now.",
  },
  {
    av: "JK",
    avBg: "#1ad45a",
    name: "James Udoh",
    role: "Founder — Prism Health",
    location: "Port Harcourt, NG",
    quote:
      "We scaled from 200 to 1k users in 18 months and the platform didn't flinch once. The architecture they designed is now one of our biggest competitive advantages.",
  },
  {
    av: "AN",
    avBg: "#6d1ad4",
    name: "Aisha Nkrumah",
    role: "VP Engineering — Orbis Retail",
    location: "Abuja, NG",
    quote:
      "Their managed support team has a faster response time than most internal IT departments I've worked with. The SLA isn't just a document they actually live by it every day.",
  },
  {
    av: "DP",
    avBg: "#c4830a",
    name: "Daniel Afolabi",
    role: "Chief Data Officer — Keltec Energy",
    location: "Ibadan, NG",
    quote:
      "The data platform HorsPulse built processes 4TB a day flawlessly. Our analysts now make decisions in minutes that used to take weeks. Transformative work.",
  },
  {
    av: "RV",
    avBg: "#1aafd4",
    name: "Reem Vasquez",
    role: "CISO — Meridian Finance",
    location: "Lagos, NG",
    quote:
      "SOC 2 and ISO 27001 in 6 months. I thought that was impossible. HorsPulse delivered on schedule, on budget, and our auditors were impressed by the documentation quality.",
  },
];

/* ── Ankara-inspired SVG pattern tile ── */
function AnkaraPattern() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full opacity-[0.035] pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    >
      <defs>
        <pattern id="ankara" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
          <rect width="32" height="32" fill="none" />
          <polygon points="16,2 30,10 30,22 16,30 2,22 2,10" fill="none" stroke="#2563EB" strokeWidth="1" />
          <circle cx="16" cy="16" r="5" fill="#2563EB" />
          <line x1="16" y1="2" x2="16" y2="30" stroke="#2563EB" strokeWidth="0.5" />
          <line x1="2" y1="10" x2="30" y2="22" stroke="#2563EB" strokeWidth="0.5" />
          <line x1="30" y1="10" x2="2" y2="22" stroke="#2563EB" strokeWidth="0.5" />
          <circle cx="16" cy="2" r="1.5" fill="#E8520A" />
          <circle cx="30" cy="10" r="1.5" fill="#E8520A" />
          <circle cx="30" cy="22" r="1.5" fill="#E8520A" />
          <circle cx="16" cy="30" r="1.5" fill="#E8520A" />
          <circle cx="2" cy="22" r="1.5" fill="#E8520A" />
          <circle cx="2" cy="10" r="1.5" fill="#E8520A" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#ankara)" />
    </svg>
  );
}

/* ── Tilt card wrapper ── */
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-60, 60], [6, -6]);
  const rotateY = useTransform(x, [-60, 60], [-6, 6]);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }
  function onLeave() { x.set(0); y.set(0); }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Individual card ── */
function TestiCard({ t, i }: { t: (typeof TESTI)[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 56, scale: 0.94 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <TiltCard>
        <motion.div
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          animate={hovered ? { borderColor: "#2563EB" } : { borderColor: "rgba(255,255,255,0.08)" }}
          transition={{ duration: 0.25 }}
          className="relative overflow-hidden rounded-2xl p-7 flex flex-col h-full"
          style={{
            background: "linear-gradient(145deg, #141414 0%, #0e0e0e 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Ankara overlay */}
          <AnkaraPattern />

          {/* Gold corner accent */}
          <motion.div
            animate={hovered ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
            initial={{ scaleX: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute top-0 left-0 h-[3px] w-full origin-left"
            style={{ background: "linear-gradient(90deg, #2563EB, #E8520A)" }}
          />

          {/* Index */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, j) => (
                <motion.span
                  key={j}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.1 + j * 0.07 + 0.3, duration: 0.3, ease: "backOut" }}
                  style={{ color: "#2563EB", fontSize: "0.8rem" }}
                >
                  ★
                </motion.span>
              ))}
            </div>
            <span
              className="font-mono text-[0.6rem] tracking-widest"
              style={{ color: "rgba(245,166,35,0.4)" }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Quote mark */}
          <div
            className="font-serif text-[4rem] leading-none mb-2 select-none"
            style={{ color: "#2563EB", opacity: 0.25, lineHeight: 1 }}
          >
            "
          </div>

          {/* Quote text */}
          <p
            className="text-[0.92rem] leading-[1.82] flex-1 mb-7"
            style={{ color: "rgba(255,255,255,0.65)", fontStyle: "italic" }}
          >
            {t.quote}
          </p>

          {/* Author row */}
          <div
            className="flex items-center gap-3.5 pt-5"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            <motion.div
              animate={hovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
              transition={{ duration: 0.3, ease: "backOut" }}
              className="w-11 h-11 rounded-full flex items-center justify-center font-black text-[0.85rem] text-white shrink-0"
              style={{
                background: `radial-gradient(circle at 35% 35%, ${t.avBg}cc, ${t.avBg})`,
                boxShadow: hovered ? `0 0 16px ${t.avBg}88` : "none",
                fontFamily: "inherit",
              }}
            >
              {t.av}
            </motion.div>
            <div className="flex flex-col min-w-0">
              <span
                className="font-bold text-[0.92rem] text-white truncate"
                style={{ fontFamily: "inherit" }}
              >
                {t.name}
              </span>
              <span
                className="text-[0.62rem] uppercase tracking-[0.1em] truncate mt-0.5"
                style={{ color: "rgba(255,255,255,0.38)", fontFamily: "monospace" }}
              >
                {t.role}
              </span>
            </div>
            {/* Location pin */}
            <div
              className="ml-auto flex items-center gap-1 shrink-0 font-mono text-[0.58rem] tracking-wider"
              style={{ color: "#2563EB", opacity: 0.7 }}
            >
              <svg width="9" height="11" viewBox="0 0 9 11" fill="currentColor">
                <path d="M4.5 0C2.01 0 0 2.01 0 4.5c0 3.375 4.5 6.5 4.5 6.5S9 7.875 9 4.5C9 2.01 6.99 0 4.5 0zm0 6.125A1.625 1.625 0 1 1 4.5 2.875a1.625 1.625 0 0 1 0 3.25z" />
              </svg>
              {t.location}
            </div>
          </div>
        </motion.div>
      </TiltCard>
    </motion.div>
  );
}

/* ── Floating adire-dot decoration ── */
function FloatingDot({ style }: { style: React.CSSProperties }) {
  return (
    <motion.div
      animate={{ y: [0, -18, 0], opacity: [0.4, 0.9, 0.4] }}
      transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, ease: "easeInOut" }}
      className="absolute rounded-full pointer-events-none"
      style={style}
    />
  );
}

/* ── Main section ── */
export default function Testimonials() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#080808] px-8 lg:px-16 py-28"
    >
      {/* ── Background: warm radial glow ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(245,166,35,0.07) 0%, transparent 65%)",
        }}
      />

      {/* ── Floating Adire dots ── */}
      <FloatingDot style={{ width: 8, height: 8, background: "#F5A623", top: "12%", left: "6%", animationDelay: "0s" }} />
      <FloatingDot style={{ width: 5, height: 5, background: "#E8520A", top: "28%", left: "92%", animationDelay: "1.2s" }} />
      <FloatingDot style={{ width: 6, height: 6, background: "#F5A623", top: "72%", left: "4%", animationDelay: "2s" }} />
      <FloatingDot style={{ width: 4, height: 4, background: "#E8520A", top: "85%", left: "88%", animationDelay: "0.6s" }} />
      <FloatingDot style={{ width: 7, height: 7, background: "#F5A623", top: "50%", left: "97%", animationDelay: "1.7s" }} />

      {/* ── Horizontal rule accent ── */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={headInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 right-0 h-[2px] origin-left"
        style={{ background: "linear-gradient(90deg, #F5A623 0%, #E8520A 40%, transparent 100%)" }}
      />

      <div ref={headRef} className="relative max-w-6xl mx-auto">
        {/* ── Eyebrow ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={headInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="flex items-center gap-2 mb-4"
        >
          <span
            className="block h-[2px] w-6"
            style={{ background: "#2563EB" }}
          />
          <span
            className="font-mono text-[0.68rem] uppercase tracking-[0.18em]"
            style={{ color: "#2563EB" }}
          >
            Testimonials
          </span>
        </motion.div>

        {/* ── Heading ── */}
        <div className="mb-5 overflow-hidden">
          <motion.h2
            initial={{ y: 60, opacity: 0 }}
            animate={headInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-black leading-[1.04] tracking-[-0.04em] text-white"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.2rem)" }}
          >
            Real clients.{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #2563EB 90%, #E8520A 10%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Real results.
            </span>
          </motion.h2>
        </div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {TESTI.map((t, i) => (
            <TestiCard key={i} t={t} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}