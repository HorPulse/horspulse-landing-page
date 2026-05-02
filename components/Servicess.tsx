"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";
import {
  FaCloud, FaShieldAlt, FaCogs, FaCode,
  FaChartLine, FaTools, FaBullseye, FaGift,
} from "react-icons/fa";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const SERVICES = [
  {
    icon: FaCode,
    title: "Custom Software Development",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80",
    desc: "We build scalable, high-performance web and mobile applications tailored to your business needs.",
    tags: ["Web Apps", "Mobile Apps", "APIs", "SaaS"],
    detail: "From MVPs to enterprise platforms, we design and develop secure, scalable, and user-focused software solutions that grow with your business.",
    stat: { value: "30+", label: "Projects delivered" },
  },
  {
    icon: FaChartLine,
    title: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=900&q=80",
    desc: "Data-driven marketing strategies that increase visibility, engagement, and conversions.",
    tags: ["SEO", "Social Media", "Ads", "Content Marketing"],
    detail: "We help brands grow online through targeted campaigns, performance marketing, and content strategies that deliver measurable results.",
    stat: { value: "3×", label: "Avg. ROI increase" },
  },
  {
    icon: FaGift,
    title: "Branding & Identity",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80",
    desc: "We craft strong brand identities that stand out and resonate with your audience.",
    tags: ["Logo Design", "Brand Strategy", "Visual Identity"],
    detail: "From logos to full brand systems, we create cohesive and memorable brand experiences that position your business for growth.",
    stat: { value: "150+", label: "Brands built" },
  },
  {
    icon: FaShieldAlt,
    title: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&q=80",
    desc: "Protect your systems, data, and operations with enterprise-grade security solutions.",
    tags: ["Security Audits", "Pen Testing", "Monitoring"],
    detail: "We identify vulnerabilities, implement protection systems, and ensure your business stays secure against evolving threats.",
    stat: { value: "0", label: "Client breaches" },
  },
  {
    icon: FaCogs,
    title: "AI Automations",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80",
    desc: "Automate processes and improve efficiency using intelligent AI-powered systems.",
    tags: ["Chatbots", "Workflows", "AI Tools", "Automation"],
    detail: "We design intelligent systems that reduce manual work, improve productivity, and unlock new business capabilities.",
    stat: { value: "60%", label: "Avg. time saved" },
  },
  {
    icon: FaTools,
    title: "IT Support & Consultation",
    image: "https://images.unsplash.com/photo-1581092921461-7d65ca45c9b8?w=900&q=80",
    desc: "Reliable IT support and expert guidance to keep your operations running smoothly.",
    tags: ["Support", "Consulting", "Maintenance"],
    detail: "We provide ongoing technical support, troubleshooting, and strategic IT advice to help your business scale with confidence.",
    stat: { value: "24/7", label: "Support coverage" },
  },
  {
    icon: FaCloud,
    title: "Tech Trainings & Webinars",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&q=80",
    desc: "Upskill your team with practical, industry-relevant tech training programs.",
    tags: ["Workshops", "Bootcamps", "Corporate Training"],
    detail: "We organize seminars, webinars, and hands-on training sessions designed to equip individuals and teams with modern tech skills.",
    stat: { value: "500+", label: "Professionals trained" },
  },
  {
    icon: FaBullseye,
    title: "Promotional Products",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=900&q=80",
    desc: "Branded merchandise that enhances visibility and leaves lasting impressions.",
    tags: ["Merch", "Corporate Gifts", "Brand Assets"],
    detail: "We design and produce high-quality promotional materials that strengthen brand recognition and customer loyalty.",
    stat: { value: "98%", label: "Client satisfaction" },
  },
];

/* ─── Desktop right panel ─── */
function ServicePanel({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const Icon = service.icon;
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        {/* Image */}
        <div
          className="relative mb-6 overflow-hidden rounded-2xl"
          style={{ border: "1px solid rgba(29,94,255,0.12)" }}
        >
          <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.55 }}>
            <Image
              src={service.image}
              alt={service.title}
              width={900}
              height={506}
              className="aspect-video w-full object-cover"
              priority
            />
          </motion.div>
          {/* Stat badge */}
          <div
            className="absolute bottom-4 right-4 flex flex-col items-end rounded-xl px-4 py-2.5"
            style={{
              background: "rgba(5,8,15,0.72)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <span
              className="font-black text-white"
              style={{ fontSize: 22, lineHeight: 1, letterSpacing: "-0.03em" }}
            >
              {service.stat.value}
            </span>
            <span
              className="font-mono text-[9px] uppercase tracking-[0.1em]"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              {service.stat.label}
            </span>
          </div>
        </div>

        {/* Header row */}
        <div className="mb-4 flex items-start gap-3">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[15px] text-blue-600"
            style={{
              background: "rgba(29,94,255,0.08)",
              border: "1px solid rgba(29,94,255,0.15)",
            }}
          >
            <Icon />
          </div>
          <div>
            <p className="mb-0.5 font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-blue-600">
              Service {String(index + 1).padStart(2, "0")}
            </p>
            <h3
              className="font-black leading-tight tracking-[-0.03em] text-[#05080F]"
              style={{ fontSize: "clamp(1.3rem,2vw,1.75rem)" }}
            >
              {service.title}
            </h3>
          </div>
        </div>

        <p className="mb-5 text-[14px] leading-[1.82]">
          {service.desc}
        </p>

        {/* Tags */}
        <div className="mb-5 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <motion.span
              key={tag}
              whileHover={{ background: "#1D5EFF", color: "#fff", borderColor: "#1D5EFF" }}
              transition={{ duration: 0.16 }}
              className="cursor-default rounded-md border px-3 py-1.5 font-mono text-[9px] font-medium uppercase tracking-[0.1em]"
              style={{
                borderColor: "rgba(29,94,255,0.18)",
                color: "#1D5EFF",
                background: "rgba(29,94,255,0.06)",
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <div className="mb-5 h-px" style={{ background: "rgba(5,8,15,0.08)" }} />

        <p className="mb-7 text-[13.5px] leading-[1.78]">
          {service.detail}
        </p>

        <motion.button
          whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(29,94,255,0.38)" }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex w-fit items-center gap-2.5 rounded-xl px-6 py-3.5 text-[13px] font-bold text-white"
          style={{
            background: "#1D5EFF",
            boxShadow: "0 4px 20px rgba(29,94,255,0.28)",
            fontFamily: "inherit",
            letterSpacing: "0.02em",
          }}
        >
          Get started
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─── Main ─── */
export default function Services() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const hv: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number = 0) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.6, delay: i * 0.09, ease: EASE },
    }),
  };

  return (
    <section
      id="services"
      ref={ref}
      className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-16 lg:py-28"
    >
      {/* BG grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(29,94,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(29,94,255,0.04) 1px,transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />
      <div
        className="pointer-events-none absolute -right-20 -top-24 h-[500px] w-[500px] rounded-full"
        style={{ background: "radial-gradient(circle,rgba(29,94,255,0.07) 0%,transparent 68%)" }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* ── Header ── */}
        <div className="mb-12 lg:mb-16">
          <motion.div
            custom={0} variants={hv} initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mb-3 flex items-center gap-2"
          >
            <span className="h-[2px] w-5 bg-blue-600" />
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-blue-600">
              What we do
            </span>
          </motion.div>

          <div className="flex flex-wrap items-end justify-between gap-6">
            <motion.h2
              custom={1} variants={hv} initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="font-black leading-[1.04] tracking-[-0.04em] text-[#05080F]"
              style={{ fontSize: "clamp(2rem,4.5vw,3.6rem)" }}
            >
              Comprehensive IT <span className="text-blue-600">Services</span>
              <br className="hidden sm:block" />
              {" "}& Solutions
            </motion.h2>

            <motion.p
              custom={2} variants={hv} initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="max-w-sm text-[14.5px] leading-[1.8]"
            >
              End-to-end technology solutions from strategy and implementation
              to ongoing support.
            </motion.p>
          </div>

          {/* Pip nav strip */}
          <motion.div
            custom={3} variants={hv} initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mt-8 flex items-center gap-3"
          >
            <span
              className="font-mono text-[9px] font-medium uppercase tracking-[0.14em]"
            >
              {SERVICES.length} services
            </span>
            <div className="h-px w-16 shrink-0" style={{ background: "rgba(5,8,15,0.08)" }} />
            {SERVICES.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                animate={
                  i === active
                    ? { scale: 1.4, backgroundColor: "#1D5EFF" }
                    : { scale: 1, backgroundColor: "rgba(29,94,255,0.2)" }
                }
                transition={{ duration: 0.22 }}
                className="h-[6px] w-[6px] rounded-full border-0 p-0"
              />
            ))}
          </motion.div>
        </div>

        {/* ══ DESKTOP: two-column ══ */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_1.2fr] lg:items-start lg:gap-12">
          {/* Left list */}
          <nav
            className="overflow-hidden rounded-2xl border"
            style={{ borderColor: "rgba(5,8,15,0.08)", background: "#F7F9FF" }}
          >
            {SERVICES.map((svc, i) => {
              const SvcIcon = svc.icon;
              const isActive = i === active;
              return (
                <motion.button
                  key={i}
                  onClick={() => setActive(i)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.04, duration: 0.45, ease: EASE }}
                  className="group relative flex w-full cursor-pointer items-center gap-3 border-b px-5 py-4 text-left transition-colors duration-200 last:border-b-0"
                  style={{
                    borderColor: "rgba(5,8,15,0.07)",
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeBar"
                      className="absolute left-0 top-0 h-full w-[3px] rounded-r opacity-40"
                    />
                  )}

                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[13px] transition-all"
                    style={{
                      background: isActive ? "rgba(255,255,255,0.18)" : "rgba(29,94,255,0.1)",
                      color: isActive ? "" : "#1D5EFF",
                    }}
                  >
                    <SvcIcon />
                  </div>

                  <span
                    className="flex-1 text-[13px] font-bold leading-snug"
                    style={{ color: isActive ? "" : "#05080F" }}
                  >
                    {svc.title}
                  </span>

                  <motion.span
                    animate={isActive ? { x: 2, opacity: 1 } : { x: 0, opacity: 0.3 }}
                    className="shrink-0 text-xs"
                    style={{ color: isActive ? "" : "#05080F" }}
                  >
                    →
                  </motion.span>

                  <span
                    className="absolute right-4 top-3.5 font-mono text-[9px] tracking-[0.1em]"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </motion.button>
              );
            })}
          </nav>

          {/* Right panel — sticky */}
          <div className="sticky top-28">
            <ServicePanel service={SERVICES[active]} index={active} />
          </div>
        </div>

        {/* ══ MOBILE: accordion — text ABOVE, image BELOW ══ */}
        <div className="flex flex-col gap-3 lg:hidden">
          {SERVICES.map((svc, i) => {
            const SvcIcon = svc.icon;
            const isOpen = i === active;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.04 + i * 0.04, duration: 0.5, ease: EASE }}
                className="overflow-hidden rounded-2xl border transition-colors duration-200"
                style={{
                  borderColor: isOpen ? "#1D5EFF" : "rgba(5,8,15,0.09)",
                  background: isOpen ? "" : "#F7F9FF",
                }}
              >
                {/* Accordion trigger */}
                <button
                  onClick={() => setActive(isOpen ? -1 : i)}
                  className="flex w-full items-center gap-3 px-4 py-4 text-left"
                >
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[14px] transition-all duration-200"
                    style={{
                      background: isOpen ? "#1D5EFF" : "rgba(29,94,255,0.08)",
                      color: isOpen ? "#fff" : "#1D5EFF",
                    }}
                  >
                    <SvcIcon />
                  </div>
                  <span className="flex-1 text-[14px] font-bold text-[#05080F]">{svc.title}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.22 }}
                    className="shrink-0 text-sm font-bold text-blue-600"
                  >
                    →
                  </motion.span>
                </button>

                {/* Expanding content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.38, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-5 pt-0">
                        {/* ── TEXT first on mobile ── */}
                        <p className="mb-2 font-mono text-[9px] font-medium uppercase tracking-[0.14em] text-blue-600">
                          Service {String(i + 1).padStart(2, "0")}
                        </p>
                        <p
                          className="mb-3 text-[13.5px] leading-[1.78]"
                        >
                          {svc.desc}
                        </p>

                        {/* Tags */}
                        <div className="mb-3 flex flex-wrap gap-1.5">
                          {svc.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md border px-2.5 py-1 font-mono text-[8.5px] font-medium uppercase tracking-[0.1em]"
                              style={{
                                borderColor: "rgba(29,94,255,0.18)",
                                color: "#1D5EFF",
                                background: "rgba(29,94,255,0.06)",
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <p
                          className="mb-5 text-[13px] leading-[1.75]"
                        >
                          {svc.detail}
                        </p>

                        {/* ── IMAGE second on mobile ── */}
                        <div className="relative mb-4 overflow-hidden rounded-xl">
                          <Image
                            src={svc.image}
                            alt={svc.title}
                            width={800}
                            height={450}
                            className="aspect-video w-full object-cover"
                          />
                          <div
                            className="absolute bottom-3 right-3 flex flex-col items-end rounded-lg px-3 py-2"
                            style={{
                              background: "rgba(5,8,15,0.72)",
                              backdropFilter: "blur(8px)",
                              border: "1px solid rgba(255,255,255,0.1)",
                            }}
                          >
                            <span
                              className="font-black text-white"
                              style={{ fontSize: 18, lineHeight: 1, letterSpacing: "-0.03em" }}
                            >
                              {svc.stat.value}
                            </span>
                            <span
                              className="font-mono text-[8px] uppercase tracking-[0.1em]"
                              style={{ color: "rgba(255,255,255,0.5)" }}
                            >
                              {svc.stat.label}
                            </span>
                          </div>
                        </div>

                        {/* CTA */}
                        <motion.button
                          whileTap={{ scale: 0.97 }}
                          className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-[13px] font-bold text-white"
                          style={{
                            background: "#1D5EFF",
                            boxShadow: "0 4px 16px rgba(29,94,255,0.28)",
                            fontFamily: "inherit",
                          }}
                        >
                          Get started
                          <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                            <path
                              d="M3 8h10M9 4l4 4-4 4"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}