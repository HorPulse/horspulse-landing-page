"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const INFO = [
  {
    icon: "📍",
    label: "Headquarters",
    val: "Abuja, Nigeria",
  },
  {
    icon: "📞",
    label: "Phone",
    val: "+234 7062 987 803",
    sub: "WhatsApp available",
  },
  {
    icon: "✉️",
    label: "Email",
    val: "horspulse@gmail.com",
    sub: "projects@horspulse.io for RFPs",
  },
  {
    icon: "🕐",
    label: "Business Hours",
    val: "Mon – Fri, 8am – 6pm WAT",
    sub: "Emergency support available 24/7",
  },
  {
    icon: "💬",
    val: "Available on site",
    sub: "Typically replies in under 2 minutes",
  },
];

const SERVICES_LIST = [
  "Cloud Architecture",
  "Cybersecurity",
  "DevOps & CI/CD",
  "Custom Software",
  "Data Engineering",
  "AI Automations",
  "Digital Marketing",
  "Managed IT Support",
];

const BUDGETS = ["< $700", "$1k–$5k", "$5k–$10k", "$10k+"];

const META = [
  { dot: "green", label: "Team online now" },
  { dot: "blue",  label: "Response within 4 hrs" },
  { dot: "blue",  label: "No commitment required" },
  { dot: "blue",  label: "Free initial consultation" },
];

/* ── Shared animation variants ── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: EASE },
  }),
};

/* ── Field wrapper ── */
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        className="font-mono text-[9px] font-medium uppercase tracking-[0.15em]"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

const inputCls =
  "w-full rounded-lg border bg-white px-3.5 py-2.5 font-[inherit] text-[13px] text-[#05080F] outline-none transition-all duration-200 placeholder:text-black/25 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10";

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [budget, setBudget] = useState("$5k–$10k");
  const [sent, setSent] = useState(false);

  function handleSubmit() {
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden bg-white"
    >
      {/* ── Background grid ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(29,94,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(29,94,255,0.035) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />
      <div
        className="pointer-events-none absolute -right-16 -top-20 h-[460px] w-[460px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(29,94,255,0.07) 0%, transparent 65%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-14 -left-10 h-[340px] w-[340px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(29,94,255,0.05) 0%, transparent 65%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-8 lg:px-16">
        {/* ── Header ── */}
        <div className="pb-0 pt-20">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mb-4 flex items-center gap-2"
          >
            <span className="block h-[2px] w-5 bg-blue-600" />
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-blue-600">
              Get in touch
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp} custom={1} initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mb-3 font-black leading-[1.04] tracking-[-0.04em] text-[#05080F]"
            style={{ fontSize: "clamp(2rem,4.5vw,3.6rem)" }}
          >
            Let's Start a{" "}
            <span className="text-blue-600">Conversation</span>
          </motion.h2>

          <motion.p
            variants={fadeUp} custom={2} initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="max-w-[560px] text-[15px] leading-[1.8]"
          >
            Whether you have a specific project in mind or just a challenge to solve — we'd love
            to hear from you. Our team typically responds within 4 hours.
          </motion.p>

          {/* Meta chips */}
          <motion.div
            variants={fadeUp} custom={3} initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mt-7 flex flex-wrap gap-5 border-t pt-6"
            style={{ borderColor: "rgba(5,8,15,0.09)" }}
          >
            {META.map((m) => (
              <div key={m.label} className="flex items-center gap-2 font-mono text-[9.5px] font-medium uppercase tracking-[0.1em]">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{
                    background: m.dot === "green" ? "#22c55e" : "#1D5EFF",
                    boxShadow: m.dot === "green" ? "0 0 5px #22c55e" : "none",
                  }}
                />
                {m.label}
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Two-column body ── */}
        <div className="mt-14 grid grid-cols-1 items-start gap-12 pb-24 lg:grid-cols-[1fr_1.15fr]">

          {/* ── LEFT: Info + Map ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12, ease: EASE }}
            className="flex flex-col"
          >
            {/* Response badge */}
            <div
              className="mb-6 inline-flex w-fit items-center gap-2 rounded-lg border px-3.5 py-2.5 font-mono text-[9.5px] font-medium uppercase tracking-[0.08em]"
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: "#22c55e", boxShadow: "0 0 5px #22c55e", animation: "pulse 2.5s infinite" }}
              />
              Average response: under 4 hours
            </div>

            {/* Info cards */}
            <div className="mb-8 flex flex-col">
              {INFO.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: EASE }}
                  className="group flex cursor-default items-start gap-3.5 py-4 transition-all duration-200 hover:pl-1"
                  style={{
                    borderBottom: i < INFO.length - 1 ? "1px solid rgba(5,8,15,0.09)" : "none",
                    paddingTop: i === 0 ? 0 : undefined,
                  }}
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border text-base transition-all duration-200 group-hover:border-blue-200 group-hover:bg-blue-50"
                    style={{ borderColor: "rgba(5,8,15,0.09)", background: "#F6F8FF" }}
                  >
                    {c.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="mb-0.5 font-mono text-[9px] font-medium uppercase tracking-[0.15em]">
                      {c.label}
                    </p>
                    <p className="text-[13.5px] font-semibold text-black">{c.val}</p>
                    <p className="text-[12px]">{c.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ── Map ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.65, ease: EASE }}
              className="relative overflow-hidden rounded-2xl border"
              style={{ borderColor: "rgba(5,8,15,0.09)", height: 210 }}
            >
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=7.4298%2C9.0379%2C7.5098%2C9.0979&layer=mapnik&marker=9.0679%2C7.4698"
                title="Horspulse office — Abuja, Nigeria"
                loading="lazy"
                className="h-full w-full border-0"
                style={{ filter: "saturate(0.9) contrast(0.92)" }}
              />
              {/* Map badge overlay */}
              <div
                className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-lg border bg-white px-3 py-1.5 font-mono text-[9px] font-medium uppercase tracking-[0.1em] text-black"
                style={{ borderColor: "rgba(5,8,15,0.1)", boxShadow: "0 2px 12px rgba(0,0,0,0.1)" }}
              >
                <span className="h-2 w-2 rounded-full bg-blue-600" style={{ boxShadow: "0 0 6px rgba(29,94,255,0.6)" }} />
                Abuja, Nigeria
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            className="relative overflow-hidden rounded-2xl border p-10"
            style={{ background: "#F6F8FF", borderColor: "rgba(5,8,15,0.09)" }}
          >
            {/* Top accent */}
            <div className="absolute left-10 top-0 h-[3px] w-14 rounded-b bg-blue-600" />

            <h3 className="mt-1.5 text-[17px] font-extrabold tracking-[-0.02em] text-black">
              Send us a message
            </h3>
            <p className="mb-7 mt-1 text-[12.5px] leading-relaxed">
              Fill in the details below and we'll get back to you within one business day.
            </p>

            {/* Name row */}
            <div className="mb-3.5 grid grid-cols-2 gap-3.5">
              <Field label="First Name">
                <input className={inputCls} style={{ borderColor: "rgba(5,8,15,0.1)" }} type="text" placeholder="Jane" />
              </Field>
              <Field label="Last Name">
                <input className={inputCls} style={{ borderColor: "rgba(5,8,15,0.1)" }} type="text" placeholder="Smith" />
              </Field>
            </div>

            {/* Email + Phone */}
            <div className="mb-3.5 grid grid-cols-2 gap-3.5">
              <Field label="Work Email">
                <input className={inputCls} style={{ borderColor: "rgba(5,8,15,0.1)" }} type="email" placeholder="jane@company.com" />
              </Field>
              <Field label="Phone (optional)">
                <input className={inputCls} style={{ borderColor: "rgba(5,8,15,0.1)" }} type="tel" placeholder="+234 800 000 0000" />
              </Field>
            </div>

            {/* Company + Service */}
            <div className="mb-3.5 grid grid-cols-2 gap-3.5">
              <Field label="Company">
                <input className={inputCls} style={{ borderColor: "rgba(5,8,15,0.1)" }} type="text" placeholder="Acme Corp" />
              </Field>
              <Field label="Service Interest">
                <div className="relative">
                  <select
                    className={inputCls + " appearance-none pr-8"}
                    style={{ borderColor: "rgba(5,8,15,0.1)" }}
                  >
                    <option value="">Select a service…</option>
                    {SERVICES_LIST.map((s) => <option key={s}>{s}</option>)}
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[10px]" style={{ color: "rgba(5,8,15,0.35)" }}>▾</span>
                </div>
              </Field>
            </div>

            {/* Budget */}
            <div className="mb-3.5">
              <Field label="Estimated Budget">
                <div className="flex flex-wrap gap-2 pt-0.5">
                  {BUDGETS.map((b) => (
                    <motion.button
                      key={b}
                      onClick={() => setBudget(b)}
                      whileTap={{ scale: 0.95 }}
                      className="rounded-md border px-3 py-1.5 font-mono text-[9px] font-medium uppercase tracking-[0.08em] transition-all duration-150"
                      style={{
                        borderColor: budget === b ? "#1D5EFF" : "rgba(5,8,15,0.1)",
                        color: budget === b ? "black" : "black",
                        background: budget === b ? "rgba(29,94,255,0.08)" : "white",
                      }}
                    >
                      {b}
                    </motion.button>
                  ))}
                </div>
              </Field>
            </div>

            {/* Message */}
            <div className="mb-3.5">
              <Field label="Tell us about your project">
                <textarea
                  className={inputCls}
                  style={{ borderColor: "rgba(5,8,15,0.1)", resize: "vertical", minHeight: 100, lineHeight: 1.65 }}
                  placeholder="Describe your challenge, current stack, timeline, and goals…"
                  rows={4}
                />
              </Field>
            </div>

            {/* Referral */}
            <div className="mb-0">
              <Field label="How did you find us?">
                <div className="relative">
                  <select className={inputCls + " appearance-none pr-8"} style={{ borderColor: "rgba(5,8,15,0.1)" }}>
                    <option value="">Select…</option>
                    <option>Google Search</option>
                    <option>LinkedIn</option>
                    <option>Referral</option>
                    <option>Social Media</option>
                    <option>Event / Conference</option>
                    <option>Other</option>
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[10px]" style={{ color: "rgba(5,8,15,0.35)" }}>▾</span>
                </div>
              </Field>
            </div>

            {/* Submit */}
            <motion.button
              onClick={handleSubmit}
              whileHover={{ scale: 1.02, boxShadow: "0 8px 28px rgba(29,94,255,0.42)" }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-[10px] py-3.5 text-[13px] font-bold tracking-wide text-white transition-colors duration-200"
              style={{
                background: sent ? "#16a34a" : "#1D5EFF",
                boxShadow: "0 4px 20px rgba(29,94,255,0.3)",
                fontFamily: "inherit",
              }}
            >
              {sent ? "✓ Message sent!" : (
                <>
                  Send Message
                  <motion.svg
                    width="14" height="14" viewBox="0 0 16 16" fill="none"
                    animate={sent ? {} : {}}
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </motion.svg>
                </>
              )}
            </motion.button>

            {/* Privacy note */}
            <p className="mt-3 flex items-center justify-center gap-1.5 text-[11.5px]">
              <svg width="10" height="12" viewBox="0 0 12 14" fill="currentColor">
                <path d="M10 6H9V4a3 3 0 10-6 0v2H2a1 1 0 00-1 1v6a1 1 0 001 1h8a1 1 0 001-1V7a1 1 0 00-1-1zM5 4a1 1 0 112 0v2H5V4zm1 7a1 1 0 110-2 1 1 0 010 2z"/>
              </svg>
              Your data is encrypted and never shared with third parties.
            </p>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.4} }
      `}</style>
    </section>
  );
}