"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
    alt: "Team collaborating on digital strategy",
    label: "Cloud Migration",
    stat: "99.9% uptime",
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    alt: "Data analytics dashboard",
    label: "Data Analytics",
    stat: "3× faster insights",
  },
  {
    src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&q=80",
    alt: "Cybersecurity operations",
    label: "Cybersecurity",
    stat: "Zero breaches",
  },
];

const SERVICES = [
  { icon: "☁️", title: "Cloud Solutions", desc: "Scalable infrastructure that grows with you" },
  { icon: "🛡️", title: "Cyber Security", desc: "Enterprise-grade protection, always on" },
  { icon: "📊", title: "Data & Analytics", desc: "Turn raw data into competitive advantage" },
  { icon: "🤖", title: "AI Automation", desc: "Intelligent workflows, less manual effort" },
];

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function TransformCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#050A14] py-28 px-6"
    >
      {/* ── Background grid & glow ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
        style={{
          width: 900,
          height: 500,
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(56,189,248,0.12) 0%, rgba(99,102,241,0.08) 50%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* ── Eyebrow ── */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-6 flex justify-center"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
            style={{
              borderColor: "rgba(56,189,248,0.35)",
              color: "#38BDF8",
              background: "rgba(56,189,248,0.07)",
            }}
          >
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ background: "#38BDF8", boxShadow: "0 0 6px #38BDF8" }}
            />
            IT Services &amp; Consulting
          </span>
        </motion.div>

        {/* ── Headline ── */}
        <div className="mb-6 text-center">
          <motion.h2
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-5xl font-extrabold leading-tight tracking-tight text-white md:text-7xl"
          >
            Transform Your
          </motion.h2>
          <motion.h2
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-5xl font-extrabold leading-tight tracking-tight md:text-7xl"
            style={{
              background: "linear-gradient(90deg, #38BDF8 0%, #818CF8 60%, #C084FC 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Business Today
          </motion.h2>
        </div>

        {/* ── Subtext ── */}
        <motion.p
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mx-auto mb-12 max-w-2xl text-center text-lg leading-relaxed"
          style={{ color: "rgba(255,255,255,0.52)" }}
        >
          We architect, secure, and scale digital infrastructure for forward-thinking
          organizations — so you can focus on what matters most: growing your business.
        </motion.p>

        {/* ── CTA Buttons ── */}
        <motion.div
          variants={fadeUp}
          custom={4}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-20 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(56,189,248,0.45)" }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full px-8 py-4 text-sm font-bold tracking-wide text-white transition-all"
            style={{
              background: "linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)",
              boxShadow: "0 0 16px rgba(56,189,248,0.25)",
            }}
          >
            Start Your Transformation →
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03, borderColor: "rgba(56,189,248,0.7)" }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full border px-8 py-4 text-sm font-semibold text-white transition-all"
            style={{ borderColor: "rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.04)" }}
          >
            View Case Studies
          </motion.button>
        </motion.div>

        {/* ── Image Cards ── */}
        <div className="mb-20 grid gap-5 sm:grid-cols-3">
          {IMAGES.map((img, i) => (
            <motion.div
              key={img.label}
              variants={scaleIn}
              custom={i}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative overflow-hidden rounded-2xl"
              style={{ border: "1px solid rgba(255,255,255,0.09)" }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <motion.img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              {/* overlay */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-5"
                style={{
                  background:
                    "linear-gradient(to top, rgba(5,10,20,0.92) 0%, rgba(5,10,20,0.3) 55%, transparent 100%)",
                }}
              >
                <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#38BDF8" }}>
                  {img.label}
                </p>
                <p className="mt-0.5 text-xl font-bold text-white">{img.stat}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Services Grid ── */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              custom={i + 1}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ y: -4, borderColor: "rgba(56,189,248,0.4)" }}
              className="rounded-2xl p-6 transition-all"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span className="mb-4 block text-3xl">{s.icon}</span>
              <h3 className="mb-1 text-base font-bold text-white">{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── Trust bar ── */}
        <motion.div
          variants={fadeUp}
          custom={6}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 flex flex-wrap items-center justify-center gap-10"
        >
          {[
            { value: "30+", label: "Clients Served" },
            { value: "6yr", label: "Industry Experience" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "24/7", label: "Support Coverage" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-3xl font-extrabold"
                style={{
                  background: "linear-gradient(90deg,#38BDF8,#818CF8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {stat.value}
              </p>
              <p className="mt-0.5 text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}