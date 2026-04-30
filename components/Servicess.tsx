"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  FaCloud,
  FaShieldAlt,
  FaCogs,
  FaCode,
  FaChartLine,
  FaTools,
  FaBullseye,
} from "react-icons/fa";

const SERVICES = [
  {
    icon: FaCloud,
    title: "Cloud & Infrastructure Engineering",
    image:
      "https://images.unsplash.com/photo-1667372283496-893f0b1e7c16?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Scalable, secure cloud environments designed to support performance, resilience, and long-term growth.",
    tags: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform"],
    detail:
      "We design, migrate, and optimize cloud-native infrastructure with high availability, disaster recovery, and cost efficiency built into every layer.",
  },
  {
    icon: FaShieldAlt,
    title: "Cybersecurity & Risk Management",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
    desc: "Comprehensive protection for your systems, data, and operations through modern security frameworks.",
    tags: ["Zero Trust", "SOC 2", "ISO 27001", "Pen Testing", "SIEM"],
    detail:
      "End-to-end security including threat detection, penetration testing, monitoring, and compliance with global standards.",
  },
  {
    icon: FaCogs,
    title: "DevOps & Platform Engineering",
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c44367f?q=80&w=1200&auto=format&fit=crop",
    desc: "Automated pipelines and infrastructure that accelerate development and ensure reliable deployments.",
    tags: ["Docker", "Kubernetes", "CI/CD", "GitHub Actions"],
    detail:
      "We implement CI/CD pipelines, containerization, and observability systems that improve speed, stability, and scalability.",
  },
  {
    icon: FaCode,
    title: "Custom Software Development",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    desc: "Tailored digital solutions built to meet your unique business needs and scale with your growth.",
    tags: ["React", "Node.js", "Python", "Microservices"],
    detail:
      "From APIs to enterprise SaaS platforms, we build secure, scalable, and high-performance applications.",
  },
  {
    icon: FaBullseye,
    title: "Brand Identity & Promotional Products",
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=1200&auto=format&fit=crop",
    desc: "Strategic brand systems and high-quality merchandise that strengthen recognition and market presence.",
    tags: ["Brand Strategy", "Identity", "Merchandise", "Packaging"],
    detail:
      "We create cohesive brand identities alongside premium promotional products and branded materials that leave lasting impressions.",
  },
  {
    icon: FaChartLine,
    title: "Data & AI Solutions",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    desc: "Transform data into actionable insights through modern analytics and AI-driven systems.",
    tags: ["BigQuery", "Kafka", "AI/ML", "Data Pipelines"],
    detail:
      "We design data platforms, analytics systems, and AI integrations that enable smarter, faster decision-making.",
  },
  {
    icon: FaTools,
    title: "Managed IT & Support Services",
    image:
      "https://images.unsplash.com/photo-1581092921461-7d65ca45c9b8?q=80&w=1200&auto=format&fit=crop",
    desc: "Reliable IT operations with proactive monitoring, maintenance, and dedicated support.",
    tags: ["24/7 Monitoring", "Helpdesk", "SLA", "Incident Response"],
    detail:
      "We ensure your systems remain secure, efficient, and always operational through continuous monitoring and support.",
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const s = SERVICES[active];
  // const Icon = s.icon;

  return (
    <section id="services" className="bg-ink px-8 lg:px-16 py-24">
      {/* Header */}
      <div className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-blue-600 mb-3.5 flex items-center gap-2">
        <span className="block w-5 h-[1.5px] bg-blue-600" />
        What we do
      </div>

      <h2 className="font-cabinet font-black text-[clamp(2.2rem,4vw,3.8rem)] tracking-[-0.04em] leading-[1.05] text-black mb-4">
        Comprehensive IT <br /> Services & Solutions
      </h2>

      <p className="text-[1rem] leading-[1.8] text-black/70 max-w-[600px]">
        We deliver end-to-end technology solutions from strategy and
        implementation to ongoing support helping organizations build, scale,
        and operate with confidence.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-20 mt-14 items-start">
        {/* LEFT LIST */}
        <div className="flex flex-col">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={i}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`py-6 border-b border-white/10 cursor-pointer group ${
                i === active ? "opacity-100" : "opacity-70"
              }`}
            >
              <div className="flex items-center justify-between">
                
                <span
                  className={`font-cabinet text-lg font-semibold transition ${
                    i === active ? "text-blue-600" : "text-black"
                  }`}
                >
                  {svc.title}
                </span>
              </div>

              {i === active && (
                <p className="mt-3 text-sm text-black leading-relaxed">
                  {svc.detail}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* RIGHT PANEL */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className=" p-8 sticky top-28 shadow-3xl"
        >
          {/* Image */}
          <Image
            src={s.image}
            alt={s.title}
            width={600}
            height={300}
            className="w-full object-fit rounded-lg mb-6 transition-transform duration-500 hover:scale-105"
          />


          <h3 className="font-cabinet text-2xl font-bold text-black mb-3">
            {s.title}
          </h3>

          <p className="text-black/70 mb-6 leading-relaxed">{s.desc}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {s.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs uppercase tracking-wide px-3 py-1 border border-black/20 text-black"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
