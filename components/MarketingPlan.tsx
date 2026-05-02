"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

type Plan = {
  id: string;
  name: string;
  desc: string;
  monthly: number;
  annual: number;
  featured: boolean;
  cta: string;
  href: string;
  fromLabel: string | null;
  features: string[];
};

const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    desc: "Best for businesses just getting started with digital marketing.",
    monthly: 29,
    annual: 23,
    featured: false,
    cta: "Get Started",
    href: "",
    fromLabel: null,
    features: [
      "Comprehensive SEO Audit",
      "Social Media Management (2 platforms)",
      "Monthly Performance Report",
      "Basic Content Creation (4 pieces/month)",
      "Email Support (48h response)",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    desc: "Best for growing businesses scaling their marketing reach.",
    monthly: 99,
    annual: 79,
    featured: true,
    cta: "Start Free Trial",
    href: "",
    fromLabel: "Everything in Starter, plus:",
    features: [
      "PPC Advertising Management",
      "Advanced Content Strategy",
      "Weekly Performance Reports",
      "Priority Support (24h response)",
      "A/B Testing Tools",
      "Conversion Rate Optimization",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    desc: "Best for established businesses needing full-service marketing.",
    monthly: 299,
    annual: 239,
    featured: false,
    cta: "Contact Sales",
    href: "",
    fromLabel: "Everything in Professional, plus:",
    features: [
      "Custom Marketing Strategy",
      "Dedicated Account Manager",
      "Advanced Analytics Dashboard",
      "24/7 Premium Phone Support",
      "API Access",
      "SLA Guarantee (99.9% uptime)",
      "Quarterly Strategy Retreat",
    ],
  },
];

function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
      <path
        d="M2 6l3 3 5-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: EASE },
  }),
};

export default function Pricing() {
  const [annual, setAnnual] = useState(true);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="pricing"
      ref={ref}
      className="relative overflow-hidden bg-[#F6F8FF] px-5 py-24 sm:px-8 lg:px-16">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(29,94,255,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(29,94,255,0.035) 1px,transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />
      <div
        className="pointer-events-none absolute -right-16 -top-20 h-[480px] w-[480px] rounded-full"
        style={{ background: "radial-gradient(circle,rgba(29,94,255,0.07) 0%,transparent 65%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-10 h-[360px] w-[360px] rounded-full"
        style={{ background: "radial-gradient(circle,rgba(29,94,255,0.05) 0%,transparent 65%)" }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, x: -14 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-4 flex items-center gap-2"
        >
          <span className="block h-[2px] w-5 bg-blue-600" />
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-blue-600">
            Marketing Pricing
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
          className="mb-3 font-black leading-[1.04] tracking-[-0.04em] text-[#05080F]"
          style={{ fontSize: "clamp(2rem,4vw,3.2rem)" }}
        >
          Find the Right Plan for{" "}
          <span className="text-blue-600">Your Business</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.15, ease: EASE }}
          className="mb-10 max-w-[500px] text-[15px] leading-[1.8]"
        >
          Flexible plans for businesses of all sizes. No hidden fees. Cancel anytime.
        </motion.p>

        {/* ── Billing toggle ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.22, ease: EASE }}
          className="mb-14 flex items-center gap-3"
        >
          <span
            className="font-mono text-[10px] font-medium uppercase tracking-[0.12em]"
            style={{ color: annual ? "rgba(5,8,15,0.4)" : "rgba(5,8,15,0.75)" }}
          >
            Monthly
          </span>

          <motion.button
            onClick={() => setAnnual((v) => !v)}
            className="relative h-[26px] w-[46px] rounded-full border-0"
            animate={{ backgroundColor: annual ? "#1D5EFF" : "rgba(5,8,15,0.15)" }}
            transition={{ duration: 0.22 }}
            aria-label="Toggle billing period"
          >
            <motion.div
              className="absolute top-[3px] h-5 w-5 rounded-full bg-white"
              animate={{ left: annual ? "calc(100% - 23px)" : 3 }}
              transition={{ duration: 0.25, ease: EASE }}
            />
          </motion.button>

          <span
            className="font-mono text-[10px] font-medium uppercase tracking-[0.12em]"
            style={{ color: annual ? "rgba(5,8,15,0.75)" : "rgba(5,8,15,0.4)" }}
          >
            Annual
          </span>

          <motion.span
            animate={{ opacity: annual ? 1 : 0, scale: annual ? 1 : 0.9 }}
            transition={{ duration: 0.2 }}
            className="rounded-md border px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.1em]"
            style={{
              background: "rgba(34,197,94,0.1)",
              borderColor: "rgba(34,197,94,0.28)",
              color: "#16a34a",
            }}
          >
            Save 20%
          </motion.span>
        </motion.div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {PLANS.map((plan, i) => {
            const price = annual ? plan.annual : plan.monthly;
            const savings = (plan.monthly - plan.annual) * 12;

            return (
              <motion.div
                key={plan.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover={
                  plan.featured
                    ? { scale: 1.02, boxShadow: "0 20px 60px rgba(29,94,255,0.45)" }
                    : { scale: 1.02, boxShadow: "0 12px 40px rgba(29,94,255,0.12)", borderColor: "rgba(29,94,255,0.28)" }
                }
                transition={{ duration: 0.25 }}
                className="relative flex flex-col overflow-hidden rounded-2xl border"
                style={
                  plan.featured
                    ? { background: "#1D5EFF", borderColor: "#1D5EFF" }
                    : { background: "#fff", borderColor: "rgba(5,8,15,0.09)" }
                }
              >
                {/* Most popular badge */}
                {plan.featured && (
                  <div
                    className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-[10px] px-4 py-1.5 font-mono text-[8.5px] font-bold uppercase tracking-[0.12em] text-blue-600"
                    style={{ background: "#fff", boxShadow: "0 2px 8px rgba(29,94,255,0.2)" }}
                  >
                    Most Popular
                  </div>
                )}

                {/* Top accent line */}
                {!plan.featured && (
                  <div className="absolute left-8 top-0 h-[3px] w-12 rounded-b bg-blue-600" />
                )}

                <div className="flex flex-1 flex-col p-8 pt-9">
                  {/* Plan label */}
                  <p
                    className="mb-1.5 font-mono text-[9px] font-medium uppercase tracking-[0.16em]"
                    style={{ color: plan.featured ? "rgba(255,255,255,0.6)" : "#1D5EFF" }}
                  >
                    {plan.name}
                  </p>
                  <h3
                    className="mb-2 font-black tracking-[-0.02em]"
                    style={{
                      fontSize: 20,
                      color: plan.featured ? "white" : "#05080F",
                    }}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className="mb-6 text-[12.5px] leading-[1.65]"
                  >
                    {plan.desc}
                  </p>

                  {/* Price block */}
                  <div
                    className="mb-6 pb-6"
                    style={{
                      borderBottom: plan.featured
                        ? "1px solid rgba(255,255,255,0.15)"
                        : "1px solid rgba(5,8,15,0.09)",
                    }}
                  >
                    <div className="flex items-end gap-1">
                      <span
                        className="pb-2 text-[18px] font-bold"
                        style={{ color: plan.featured ? "rgba(255,255,255,0.7)" : "#1D5EFF" }}
                      >
                        $
                      </span>
                      <motion.span
                        key={price}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: EASE }}
                        className="font-black leading-none tracking-[-0.04em]"
                        style={{
                          fontSize: 46,
                          color: plan.featured ? "#fff" : "#05080F",
                        }}
                      >
                        {price}
                      </motion.span>
                      <span
                        className="pb-2 font-mono text-[11px] font-medium tracking-[0.06em]"
                      >
                        /mo
                      </span>
                    </div>

                    {/* Annual savings note */}
                    <motion.p
                      key={annual ? "annual" : "monthly"}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.25 }}
                      className="mt-1.5 font-mono text-[9px] font-medium uppercase tracking-[0.08em]"
                    >
                      {annual
                        ? `Billed annually · Save $${savings}/yr`
                        : "Billed monthly"}
                    </motion.p>
                  </div>

                  {/* Feature list */}
                  <ul className="mb-8 flex flex-1 flex-col gap-2.5">
                    {plan.fromLabel && (
                      <>
                        <li
                          className="font-mono text-[8.5px] font-medium uppercase tracking-[0.1em]"
                        >
                          {plan.fromLabel}
                        </li>
                        <li
                          className="h-px"
                          style={{
                            background: plan.featured
                              ? "rgba(255,255,255,0.12)"
                              : "rgba(5,8,15,0.08)",
                          }}
                        />
                      </>
                    )}
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-[13px]" style={{ lineHeight: 1.55 }}>
                        <span
                          className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[5px]"
                          style={{
                            background: plan.featured ? "rgba(255,255,255,0.18)" : "rgba(29,94,255,0.1)",
                            color: plan.featured ? "#fff" : "#1D5EFF",
                          }}
                        >
                          <CheckIcon />
                        </span>
                        <span style={{ color: plan.featured ? "rgba(255,255,255,0.82)" : "rgba(5,8,15,0.72)" }}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      href={plan.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-[13px] font-bold tracking-wide no-underline transition-colors duration-200"
                      style={
                        plan.featured
                          ? {
                              background: "#fff",
                              color: "#1D5EFF",
                              boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
                            }
                          : {
                              background: "#1D5EFF",
                              color: "#fff",
                              boxShadow: "0 4px 16px rgba(29,94,255,0.25)",
                            }
                      }
                    >
                      {plan.cta}
                      <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M3 8h10M9 4l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Bottom trust note ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55, ease: EASE }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6"
        >
          {[
            { icon: "🔒", text: "No credit card required" },
            { icon: "↩️", text: "Cancel anytime" },
            { icon: "💬", text: "Free onboarding call" },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2 font-mono text-[9.5px] font-medium uppercase tracking-[0.1em]"
            >
              {/* <span>{item.icon}</span> */}
              {item.text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}