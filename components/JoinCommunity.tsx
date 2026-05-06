"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

// ── Replace with your actual WhatsApp community invite link ──
const WA_LINK = "https://chat.whatsapp.com/YOUR_INVITE_CODE_HERE";

const STATS = [
  { value: "500+", label: "Members" },
  { value: "Free",  label: "To join" },
  { value: "Active", label: "Daily" },
];

const AVATARS = [
  { initial: "E", bg: "linear-gradient(135deg,#1D5EFF,#4B83FF)" },
  { initial: "A", bg: "linear-gradient(135deg,#0369a1,#38bdf8)" },
  { initial: "S", bg: "linear-gradient(135deg,#4338ca,#818cf8)" },
  { initial: "D", bg: "linear-gradient(135deg,#0c4a6e,#0369a1)" },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: EASE } },
});

function FloatingDot({ style }: { style: React.CSSProperties }) {
  return (
    <motion.div
      className="pointer-events-none absolute rounded-full"
      style={style}
      animate={{ y: [0, -14, 0], opacity: [0.5, 0.9, 0.5] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export function JoinCommunity() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="px-8 py-10 lg:px-16"
    >
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 lg:px-10">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative overflow-hidden rounded-3xl border p-16 lg:p-20"
          style={{
            background: "linear-gradient(135deg, #05080F 0%, #0d1526 50%, #111827 100%)",
            borderColor: "rgba(255,255,255,0.07)",
          }}
        >
          {/* Background grid */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(29,94,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(29,94,255,0.06) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* Glows */}
          <div
            className="pointer-events-none absolute -left-20 -top-24 h-[480px] w-[480px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(29,94,255,0.18) 0%, transparent 65%)" }}
          />
          <div
            className="pointer-events-none absolute -bottom-20 -right-16 h-[380px] w-[380px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(37,211,102,0.12) 0%, transparent 65%)" }}
          />

          {/* Floating dots */}
          <FloatingDot style={{ width: 7, height: 7, background: "#1D5EFF",  top: "18%", left: "8%",  animationDelay: "0s"   }} />
          <FloatingDot style={{ width: 5, height: 5, background: "#25D366",  top: "72%", left: "14%", animationDelay: "1.3s" }} />
          <FloatingDot style={{ width: 6, height: 6, background: "#1D5EFF",  top: "25%", right:"16%", animationDelay: "0.7s" }} />
          <FloatingDot style={{ width: 4, height: 4, background: "#25D366",  top: "80%", right:"22%", animationDelay: "2s"   }} />

          {/* ── Content ── */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-12">

            {/* LEFT */}
            <div className="flex-1" style={{ minWidth: 280 }}>
              <motion.div
                variants={fadeUp(0.1)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="mb-4 flex items-center gap-2"
              >
                <span className="block h-[2px] w-5" style={{ background: "#1D5EFF" }} />
                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em]" style={{ color: "#1D5EFF" }}>
                  Community
                </span>
              </motion.div>

              <motion.h2
                variants={fadeUp(0.17)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="mb-4 font-black leading-[1.05] tracking-[-0.04em] text-white"
                style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
              >
                Join Our{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #1D5EFF, #60a5fa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Community
                </span>
              </motion.h2>

              <motion.p
                variants={fadeUp(0.24)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="mb-8 max-w-[460px] text-[15px] leading-[1.8] text-white"
              >
                Connect with fellow professionals, get early access to resources, share insights,
                and stay ahead in the fast-moving world of technology, all in one place.
              </motion.p>

              {/* Stats */}
              <motion.div
                variants={fadeUp(0.3)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="flex flex-wrap gap-6"
              >
                {STATS.map((s) => (
                  <div key={s.label} className="flex items-center gap-2">
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ background: "#25D366", boxShadow: "0 0 6px #25D366" }}
                    />
                    <span className="font-mono text-[10px] font-medium uppercase tracking-[0.1em]" style={{ color: "rgba(255,255,255,0.4)" }}>
                      <strong style={{ color: "rgba(255,255,255,0.82)", fontWeight: 700 }}>{s.value}</strong>{" "}{s.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT */}
            <motion.div
              variants={fadeUp(0.2)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex flex-col items-center gap-4"
            >
              {/* Avatar stack */}
              <div className="flex items-center">
                <div className="flex items-center">
                  {AVATARS.map((av, i) => (
                    <div
                      key={i}
                      className="flex h-8 w-8 items-center justify-center rounded-full border-2 font-black text-[12px] text-white"
                      style={{
                        background: av.bg,
                        borderColor: "#05080F",
                        marginLeft: i === 0 ? 0 : -8,
                        zIndex: AVATARS.length - i,
                      }}
                    >
                      {av.initial}
                    </div>
                  ))}
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 font-mono text-[9px] font-bold"
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.6)",
                      borderColor: "#05080F",
                      marginLeft: -8,
                      letterSpacing: "0.04em",
                    }}
                  >
                    +496
                  </div>
                </div>
                <span className="ml-2.5 text-[12px]" style={{ color: "rgba(255,255,255,0.38)" }}>
                  already inside
                </span>
              </div>

              {/* WhatsApp CTA button */}
              <motion.a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.04,
                  y: -3,
                  boxShadow: "0 12px 40px rgba(37,211,102,0.5)",
                }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 rounded-2xl px-8 py-4 font-bold text-white no-underline"
                style={{
                  background: "linear-gradient(135deg, #128C7E 0%, #25D366 100%)",
                  boxShadow: "0 4px 24px rgba(37,211,102,0.35)",
                  fontSize: 15,
                  fontFamily: "inherit",
                  letterSpacing: "0.01em",
                  whiteSpace: "nowrap",
                }}
              >
                {/* WhatsApp icon */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Join on WhatsApp
              </motion.a>

              {/* Reassurance note */}
              <div
                className="flex items-center gap-1.5 font-mono text-[9.5px] font-medium uppercase tracking-[0.1em]"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                <span
                  className="h-[5px] w-[5px] rounded-full"
                  style={{ background: "#25D366", boxShadow: "0 0 4px #25D366", animation: "pulse 2.5s infinite" }}
                />
                Free · No spam · Leave anytime
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.3} }
      `}</style>
    </section>
  );
}