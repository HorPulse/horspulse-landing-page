"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const METRICS = [
  { label: "Infrastructure Uptime",  val: "99.9", unit: "%",  w: "99.9%" },
  { label: "On-Time Delivery",       val: "96",   unit: "%",  w: "96%"   },
  { label: "Client Retention",       val: "94",   unit: "%",  w: "94%"   },
  { label: "Customer Satisfaction",  val: "4.9",  unit: "/5", w: "98%"   },
];

const BADGES = ["ISO 27001", "SOC 2 Type II", "99.9% SLA", "24/7 Support"];

const POINTS = [
  {
    icon: "🔭",
    title: "Strategic, Not Just Technical",
    desc: "We start every engagement by understanding your business goals, not just your ticket list. Technology decisions are always tied to measurable outcomes.",
  },
  {
    icon: "🔒",
    title: "Security by Default",
    desc: "Security isn't a checkbox we add at the end. Every system we design is built with threat modeling, least-privilege access, and audit trails from day one.",
  },
  {
    icon: "📡",
    title: "Radical Transparency",
    desc: "Weekly progress reports, live dashboards, and direct Slack access to your engineering lead. You'll never be left wondering what's happening.",
  },
  {
    icon: "♾️",
    title: "Long-Term Partnership",
    desc: "94% of our clients renew year over year. We're invested in your long-term success, not just the initial delivery milestone.",
  },
];

/* ── Animated metric bar ── */
function MetricRow({ m, index, inView }: { m: typeof METRICS[0]; index: number; inView: boolean }) {
  return (
    <div className="mb-6 last:mb-0">
      <div className="mb-2 flex items-center justify-between">
        <span
          className="text-[9px] font-medium uppercase tracking-[0.14em]"
        >
          {m.label}
        </span>
        <span className="font-black text-[15px] leading-none text-black">
          {m.val}
          <span className="ml-0.5 text-[11px] font-semibold text-blue-600">{m.unit}</span>
        </span>
      </div>
      <div className="h-[6px] overflow-hidden rounded-full bg-black">
        <motion.div
          className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg, #1245CC, #1D5EFF)" }}
          initial={{ width: 0 }}
          animate={inView ? { width: m.w } : { width: 0 }}
          transition={{ duration: 1.1, delay: 0.35 + index * 0.14, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export default function WhyUs() {
  const rootRef = useRef(null);
  const inView  = useInView(rootRef, { once: true, margin: "-80px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden bg-white px-8 py-24 lg:px-16"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(29,94,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(29,94,255,0.04) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute -right-20 -top-24 h-[500px] w-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(29,94,255,0.06) 0%, transparent 65%)" }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* ── Header ── */}
        <motion.div
          {...fadeUp(0)}
          className="mb-4 flex items-center gap-2"
        >
          <span className="block h-[2px] w-5 bg-blue-600" />
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-blue-600">
            Why HorsPulse
          </span>
        </motion.div>

        <motion.h2
          {...fadeUp(0.08)}
          className="mb-3 font-black leading-[1.04] tracking-[-0.04em] text-[#05080F]"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.6rem)" }}
        >
          Built on <span className="text-blue-600">Proof,</span>
          <br />Not Promise
        </motion.h2>

        <motion.p
          {...fadeUp(0.16)}
          className="mb-16 max-w-[540px] text-[15px] leading-[1.8]"
        >
          Every claim we make is backed by data. Here's what our clients actually
          experience working with us from first sprint to long-term partnership.
        </motion.p>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2">

          {/* ── LEFT: Metrics card ── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-2xl border p-9"
            style={{ background: "#F7F9FF", borderColor: "rgba(5,8,15,0.09)" }}
          >
            {/* Top accent bar */}
            <div
              className="absolute left-9 top-0 h-[3px] w-12 rounded-b"
              style={{ background: "#1D5EFF" }}
            />

            <p
              className="mb-7 mt-2 font-mono text-[9.5px] font-medium uppercase tracking-[0.16em]"
            >
              Performance Benchmarks
            </p>

            {METRICS.map((m, i) => (
              <MetricRow key={m.label} m={m} index={i} inView={inView} />
            ))}

            {/* Badges */}
            <div
              className="mt-7 flex flex-wrap gap-2 border-t pt-6"
              style={{ borderColor: "rgba(5,8,15,0.08)" }}
            >
              {BADGES.map((b) => (
                <span
                  key={b}
                  className="rounded-[5px] border font-mono text-[9px] font-medium uppercase tracking-[0.1em]"
                  style={{
                    padding: "5px 12px",
                    borderColor: "rgba(29,94,255,0.18)",
                    background: "rgba(29,94,255,0.08)",
                  }}
                >
                  {b}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Points ── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
          >
            {POINTS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.28 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex gap-4 py-6"
                style={{
                  borderBottom: i < POINTS.length - 1 ? "1px solid rgba(5,8,15,0.09)" : "none",
                  paddingTop: i === 0 ? 0 : undefined,
                }}
              >
                {/* Hover accent bar */}
                <motion.div
                  className="absolute -left-8 top-0 bottom-0 w-[3px] rounded-r origin-center"
                  style={{ background: "#1D5EFF" }}
                  initial={{ scaleY: 0 }}
                  whileHover={{ scaleY: 1 }}
                  transition={{ duration: 0.22 }}
                />

                {/* Text */}
                <div className="min-w-0 flex-1">
                  <p className="mb-1.5 text-[14px] font-extrabold tracking-[-0.01em] text-[#05080F]">
                    {p.title}
                  </p>
                  <p className="text-[13px] leading-[1.76]">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}