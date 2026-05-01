"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  FaCloud, FaShieldAlt, FaCogs, FaCode,
  FaChartLine, FaTools, FaBullseye, FaGift,
} from "react-icons/fa";

const SERVICES = [
  {
    icon: FaCode,
    title: "Custom Software Development",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80",
    desc: "We build scalable, high-performance web and mobile applications tailored to your business needs.",
    tags: ["Web Apps", "Mobile Apps", "APIs", "SaaS"],
    detail: "From MVPs to enterprise platforms, we design and develop secure, scalable, and user-focused software solutions that grow with your business.",
  },
  {
    icon: FaChartLine,
    title: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=900&q=80",
    desc: "Data-driven marketing strategies that increase visibility, engagement, and conversions.",
    tags: ["SEO", "Social Media", "Ads", "Content Marketing"],
    detail: "We help brands grow online through targeted campaigns, performance marketing, and content strategies that deliver measurable results.",
  },
  {
    icon: FaGift,
    title: "Branding & Identity",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=900&q=80",
    desc: "We craft strong brand identities that stand out and resonate with your audience.",
    tags: ["Logo Design", "Brand Strategy", "Visual Identity"],
    detail: "From logos to full brand systems, we create cohesive and memorable brand experiences that position your business for growth.",
  },
  {
    icon: FaShieldAlt,
    title: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&q=80",
    desc: "Protect your systems, data, and operations with modern security solutions.",
    tags: ["Security Audits", "Pen Testing", "Monitoring"],
    detail: "We identify vulnerabilities, implement protection systems, and ensure your business stays secure against evolving threats.",
  },
  {
    icon: FaCogs,
    title: "AI Automations",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80",
    desc: "Automate processes and improve efficiency using AI-powered systems.",
    tags: ["Chatbots", "Workflows", "AI Tools", "Automation"],
    detail: "We design intelligent systems that reduce manual work, improve productivity, and unlock new business capabilities.",
  },
  {
    icon: FaTools,
    title: "IT Support & Consultation",
    image: "https://images.unsplash.com/photo-1581092921461-7d65ca45c9b8?w=900&q=80",
    desc: "Reliable IT support and expert guidance to keep your operations running smoothly.",
    tags: ["Support", "Consulting", "Maintenance"],
    detail: "We provide ongoing technical support, troubleshooting, and strategic IT advice to help your business scale with confidence.",
  },
  {
    icon: FaCloud,
    title: "Tech Trainings & Webinars",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&q=80",
    desc: "Upskill your team with practical, industry-relevant tech training programs.",
    tags: ["Workshops", "Bootcamps", "Corporate Training"],
    detail: "We organize seminars, webinars, and hands-on training sessions designed to equip individuals and teams with modern tech skills.",
  },
  {
    icon: FaBullseye,
    title: "Promotional Products & Merchandise",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=900&q=80",
    desc: "Branded merchandise that enhances visibility and leaves lasting impressions.",
    tags: ["Merch", "Corporate Gifts", "Brand Assets"],
    detail: "We design and produce high-quality promotional materials that strengthen brand recognition and customer loyalty.",
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const s = SERVICES[active];
  const Icon = s.icon;

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white px-8 lg:px-16 py-24"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(29,94,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(29,94,255,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      {/* Blue glow top-right */}
      <div
        className="pointer-events-none absolute -top-32 -right-24 h-[560px] w-[560px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(29,94,255,0.07) 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 flex items-center gap-2"
        >
          <span className="block h-[2px] w-5 bg-blue-600" />
          <span className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.18em] text-blue-600">
            What we do
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mb-4 font-black leading-[1.05] tracking-[-0.04em] text-[#05080F]"
          style={{ fontSize: "clamp(2rem,4.5vw,3.6rem)" }}
        >
          Comprehensive IT{" "}
          <span className="text-blue-600">Services</span>
          <br />& Solutions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="mb-14 max-w-[580px] text-[15px] leading-[1.8] text-black"
        >
          We deliver end-to-end technology solutions from strategy and implementation
          to ongoing support helping organisations build, scale, and operate with confidence.
        </motion.p>

        <div className="grid grid-cols-1 items-start gap-0 lg:grid-cols-[340px_1fr]">
          {/* ── Left: service list ── */}
          <nav className="border-t border-blue-600">
            {SERVICES.map((svc, i) => {
              const SvcIcon = svc.icon;
              const isActive = i === active;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.45 }}
                  onClick={() => setActive(i)}
                  className="group relative cursor-pointer border-b border-blue-600 transition-colors duration-200"
                  style={{ background: isActive ? "#1D5EFF" : "white" }}
                  whileHover={!isActive ? { backgroundColor: "rgba(29,94,255,0.07)" } : {}}
                >
                  <div className="flex items-center gap-3 px-5 py-[18px]">
                    {/* Icon bubble */}
                    <div
                      className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-lg text-[14px] transition-all duration-200"
                      style={{
                        background: isActive ? "rgba(255,255,255,0.18)" : "rgba(29,94,255,0.1)",
                        color: isActive ? "" : "#1D5EFF",
                      }}
                    >
                      <SvcIcon />
                    </div>

                    <span
                      className="flex-1 text-[13.5px] font-bold leading-snug transition-colors duration-200"
                      style={{ color: isActive ? "" : "#05080F" }}
                    >
                      {svc.title}
                    </span>

                    <span
                      className="text-sm transition-all duration-200 group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </div>

                  {/* Expanded detail */}
                  <motion.div
                    initial={false}
                    animate={isActive ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-4 pl-[66px] text-[12.5px] leading-[1.75]">
                      {svc.detail}
                    </p>
                  </motion.div>

                  {/* Index badge */}
                  <span
                    className="absolute right-5 top-[18px] font-mono text-[9px] tracking-[0.1em]"
                    style={{ color: isActive ? "rgba(255,255,255,0.3)" : "rgba(5,8,15,0.18)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </motion.div>
              );
            })}
          </nav>

          {/* ── Right: panel ── */}
          <div className="sticky top-28 pl-0 lg:pl-10">
            {/* Progress pips */}
            <div className="mb-8 flex items-center gap-1.5">
              {SERVICES.map((_, i) => (
                <motion.div
                  key={i}
                  animate={i === active ? { scale: 1.35 } : { scale: 1 }}
                  transition={{ duration: 0.25 }}
                  className="h-[6px] w-[6px] cursor-pointer rounded-full transition-colors duration-300"
                  style={{ background: i === active ? "#1D5EFF" : "rgba(29,94,255,0.2)" }}
                  onClick={() => setActive(i)}
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Image */}
                <div className="mb-7 overflow-hidden rounded-2xl border border-blue-600">
                  <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.5 }}>
                    <Image
                      src={s.image}
                      alt={s.title}
                      width={900}
                      height={506}
                      className="aspect-video w-full object-cover"
                      priority
                    />
                  </motion.div>
                </div>

                {/* Eyebrow */}
                <p className="mb-2.5 font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-blue-600">
                  Service {String(active + 1).padStart(2, "0")}
                </p>

                {/* Title */}
                <h3
                  className="mb-3 font-black leading-[1.1] tracking-[-0.03em] text-black"
                  style={{ fontSize: "clamp(1.4rem,2.5vw,2rem)" }}
                >
                  {s.title}
                </h3>

                {/* Desc */}
                <p className="mb-6 text-[14px] leading-[1.8] text-black">{s.desc}</p>

                {/* Tags */}
                <div className="mb-7 flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ backgroundColor: "#1D5EFF", color: "", borderColor: "#1D5EFF" }}
                      transition={{ duration: 0.18 }}
                      className="cursor-default rounded-[4px] border px-3 py-1.5 font-mono text-[9.5px] font-medium uppercase tracking-[0.1em]"
                      style={{ borderColor: "rgba(29,94,255,0.2)", color: "#1D5EFF", background: "rgba(29,94,255,0.07)" }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(29,94,255,0.38)" }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-[13px] font-bold tracking-wide text-white"
                  style={{
                    background: "#1D5EFF",
                    boxShadow: "0 4px 20px rgba(29,94,255,0.28)",
                    fontFamily: "inherit",
                  }}
                >
                  Learn more
                  <motion.span
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}