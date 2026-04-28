"use client";

import { useState } from "react";

const SERVICES = [
  { icon:"☁️", title:"Cloud Architecture",  desc:"We design cloud environments that match your exact workload profile — not a generic template. Multi-region, multi-cloud, disaster-recovery-ready from day one.", tags:["AWS","GCP","Azure","Terraform","Kubernetes"], detail:"Design and migration of multi-cloud environments on AWS, GCP, and Azure — optimized for cost, performance, and availability." },
  { icon:"🔐", title:"Cybersecurity",        desc:"End-to-end protection: penetration testing, zero-trust architecture, SOC monitoring, and full compliance frameworks including ISO 27001, SOC 2, and GDPR.", tags:["Pen Testing","Zero Trust","SOC 2","GDPR","SIEM"], detail:"End-to-end security: penetration testing, SOC monitoring, incident response, and compliance frameworks (ISO 27001, SOC 2, GDPR)." },
  { icon:"⚙️", title:"DevOps & CI/CD",      desc:"We automate your entire delivery pipeline — from code commit to production — with Kubernetes, Docker, and observability built in at every layer.", tags:["Kubernetes","Docker","GitHub Actions","Prometheus","ArgoCD"], detail:"Kubernetes orchestration, Docker containerization, and automated pipelines that ship faster with built-in quality gates." },
  { icon:"💻", title:"Custom Software",      desc:"Bespoke applications engineered for your exact requirements. From RESTful APIs to full enterprise SaaS platforms — built to scale, designed to last.", tags:["Node.js","Python","React","GraphQL","Microservices"], detail:"Bespoke web and mobile applications — from APIs and microservices to full enterprise SaaS platforms, built to last." },
  { icon:"📊", title:"Data Engineering",     desc:"Data pipelines, warehouses, and real-time analytics systems that turn petabytes of raw data into strategic intelligence your teams can act on instantly.", tags:["Kafka","Spark","dbt","BigQuery","Airflow"], detail:"Data pipelines, warehousing, BI dashboards, and AI/ML integration that turn raw data into strategic business intelligence." },
  { icon:"🛠️", title:"Managed IT Support",  desc:"Your technology, always running. 24/7 monitoring, proactive maintenance, dedicated helpdesk, and guaranteed SLAs — your team focuses on the business.", tags:["24/7 NOC","SLA","Helpdesk","Monitoring","Incident Response"], detail:"24/7 monitoring, proactive maintenance, and dedicated helpdesk — your technology, always running, always protected." },
  { icon:"🤖", title:"AI-driven IT Services",  desc:"Your technology, always running. 24/7 monitoring, proactive maintenance, dedicated helpdesk, and guaranteed SLAs — your team focuses on the business.", tags:["24/7 NOC","SLA","Helpdesk","Monitoring","Incident Response"], detail:"24/7 monitoring, proactive maintenance, and dedicated helpdesk — your technology, always running, always protected." },
];

export default function Servicess() {
  const [active, setActive] = useState(0);
  const s = SERVICES[active];

  return (
    <section id="services" className="bg-ink px-8 lg:px-16 py-24">
      <div className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-accent mb-3.5 flex items-center gap-2">
        <span className="block w-5 h-[1.5px] bg-accent" />What we do
      </div>
      <h2 className="reveal font-cabinet font-black text-[clamp(2.2rem,4vw,3.8rem)] tracking-[-0.04em] leading-[1.05] text-white mb-4">
        Comprehensive IT<br />Services &amp; Solutions
      </h2>
      <p className="reveal font-epilogue text-[1rem] leading-[1.8] text-muted max-w-120">
        We cover the full technology spectrum — strategy, implementation, and ongoing support — so your stack never becomes a bottleneck.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-20 mt-14 items-start">
        {/* List */}
        <div className="flex flex-col">
          {SERVICES.map((svc, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              className={`svc-item border-t border-darkborder py-7 cursor-none last:border-b last:border-darkborder group ${i === active ? "svc-active" : ""}`}
            >
              <div className="flex items-center justify-between">
                <span className={`font-cabinet text-[1.2rem] font-bold transition-colors duration-200 ${i === active ? "text-white" : "text-muted group-hover:text-white"}`}>
                  {svc.title}
                </span>
                <span className={`text-[1.2rem] transition-all duration-200 ${i === active ? "text-accent rotate-0" : "text-darkborder -rotate-45 group-hover:text-accent group-hover:rotate-0"}`}>→</span>
              </div>
              {i === active && (
                <p className="mt-4 text-[0.9rem] leading-[1.7] text-muted">{svc.detail}</p>
              )}
            </div>
          ))}
        </div>

        {/* Panel */}
        <div className="bg-dark border border-darkborder p-12 min-h-100 sticky top-28">
          <div className="font-mono text-[0.7rem] text-darkmuted3 uppercase tracking-[0.12em] mb-8">
            Service 0{active + 1} / 06
          </div>
          <span className="text-5xl mb-6 block">{s.icon}</span>
          <div className="font-cabinet font-black text-[1.8rem] text-white tracking-[-0.03em] mb-4">{s.title}</div>
          <p className="text-[0.95rem] leading-[1.8] text-darkmuted mb-8">{s.desc}</p>
          <div className="flex flex-wrap gap-2">
            {s.tags.map((t) => (
              <span key={t} className="font-mono text-[0.65rem] uppercase tracking-[0.08em] px-3 py-1.5 border border-darkborder text-darkmuted2">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}