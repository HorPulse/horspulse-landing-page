const PROJECTS = [
  { bg:"from-[#0f2460] to-[#1a4fd4]", icon:"🏦", badge:"FinTech",    client:"Finara Group",     title:"Core Banking Platform Overhaul",         desc:"Migrated a legacy monolith to event-driven microservices, reducing transaction processing time by 68% and enabling real-time fraud detection.", tags:["Microservices","Kafka","AWS"] },
  { bg:"from-[#1f0a05] to-[#d4501a]", icon:"🏥", badge:"HealthTech", client:"Prism Health",     title:"Patient Data Platform at Scale",          desc:"Built a HIPAA-compliant cloud infrastructure that scaled from 10K to 2M users in 18 months with zero unplanned downtime.", tags:["HIPAA","GCP","PostgreSQL"] },
  { bg:"from-[#0a1f0a] to-[#1ad45a]", icon:"🚚", badge:"Logistics",  client:"Vantage Logistics", title:"Real-Time Fleet Tracking System",         desc:"IoT-integrated tracking platform with predictive route optimization, reducing fuel costs by 22% and delivery windows by 31%.", tags:["IoT","Real-Time","ML"] },
  { bg:"from-[#1a1a2e] to-[#6d1ad4]", icon:"🛒", badge:"E-Commerce", client:"Orbis Retail",     title:"Unified Commerce Infrastructure",         desc:"Integrated 14 regional storefronts into a single headless commerce platform handling 500K+ concurrent users on peak days.", tags:["Headless","GraphQL","Redis"] },
  { bg:"from-[#2e1a00] to-[#d4a01a]", icon:"⚡", badge:"Energy",     client:"Keltec Energy",    title:"Smart Grid Analytics Dashboard",          desc:"Real-time analytics platform ingesting 4TB/day from smart meters across 3 countries, powering demand forecasting models.", tags:["Big Data","Spark","Grafana"] },
  { bg:"from-[#001a2e] to-[#1aafd4]", icon:"🔐", badge:"Security",   client:"Meridian Finance",  title:"Zero-Trust Security Architecture",        desc:"Complete security posture redesign achieving SOC 2 Type II and ISO 27001 certification in 6 months. Zero breaches since deployment.", tags:["Zero-Trust","SOC 2","ISO 27001"] },
];

export function Projects() {
  return (
    <section id="projects" className="bg-bg px-8 lg:px-16 py-24">
      <div className="flex justify-between items-end mb-14 gap-10 flex-wrap">
        <div>
          <div className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-accent mb-3.5 flex items-center gap-2">
            <span className="block w-5 h-[1.5px] bg-accent" /> Our work
          </div>
          <h2 className="reveal font-cabinet font-black text-[clamp(2.2rem,4vw,3.8rem)] tracking-[-0.04em] leading-[1.05] text-ink">
            Selected Projects
          </h2>
        </div>
        <p className="reveal font-epilogue text-[1rem] leading-[1.8] text-ink2 max-w-120">
          Real solutions for real challenges — across industries, at scale.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {PROJECTS.map((p, i) => (
          <div
            key={i}
            className={`project-card bg-card border border-border overflow-hidden cursor-none transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] reveal ${i%3===1?"delay-1":i%3===2?"delay-2":""}`}
          >
            <div className={`h-55 relative flex items-center justify-center bg-linear-to-br ${p.bg}`}>
              <span className="text-[3.5rem] opacity-40">{p.icon}</span>
              <span className="absolute top-4 right-4 font-mono text-[0.6rem] uppercase tracking-widest px-2.5 py-1 bg-black/40 text-white/70 backdrop-blur-sm">
                {p.badge}
              </span>
            </div>
            <div className="p-7">
              <div className="font-mono text-[0.65rem] uppercase tracking-widest text-muted mb-2">{p.client}</div>
              <div className="font-cabinet font-black text-[1.15rem] text-ink tracking-[-0.02em] mb-2.5 leading-[1.2]">{p.title}</div>
              <p className="text-[0.85rem] leading-[1.7] text-ink2 mb-5">{p.desc}</p>
              <div className="flex gap-2 flex-wrap">
                {p.tags.map((t) => (
                  <span key={t} className="font-mono text-[0.6rem] uppercase tracking-[0.06em] px-2.5 py-1 bg-bg border border-border text-muted">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}