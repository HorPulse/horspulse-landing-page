"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const text = "HorsPulse";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-6">

        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/logowhite.png"
            alt="Logo"
            width={80}
            height={80}
          />
        </motion.div>

        {/* Animated Brand Text */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex text-white text-xl font-semibold tracking-wide"
        >
          {text.split("").map((char, i) => (
            <motion.span key={i} variants={letter}>
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Animated line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="h-[2px] bg-accent rounded-full"
        />

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-white/60 text-[0.7rem] tracking-widest uppercase font-mono"
        >
          Building Digital Excellence
        </motion.p>
      </div>
    </motion.div>
  );
}