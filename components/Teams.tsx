const TEAM = [
  { bg:"from-[#d4e4f4] to-[#a0b8d0]", face:"E", name:"Emmanuel Owunari Horsfall",  role:"CEO & Co-Founder",      bio:"15 years leading enterprise IT transformations across finance and healthcare sectors.", socials:["in","𝕏"] },
  { bg:"from-[#d4f4d4] to-[#a0d0a8]", face:"A", name:"Abiye Desire Omiete",   role:"CTO & Co Founder",      bio:"Certified CISSP with 10+ years in offensive security and compliance engineering.", socials:["in","𝕏"] },
  { bg:"from-[#f4d4d4] to-[#d0a0a0]", face:"👩‍💻", name:"David David Alban",  role:"Technical Lead & Co-Founder",      bio:"Former AWS principal engineer. Architect of systems serving millions daily.", socials:["in","gh"] },
  // { bg:"from-[#f4f0d4] to-[#d0c8a0]", face:"👩‍🎨", name:"Sofia Reyes",   role:"Head of Design",        bio:"Bridges engineering and UX — designing interfaces that are both beautiful and bulletproof.", socials:["in","be"] },
  // { bg:"from-[#e4d4f4] to-[#b8a0d0]", face:"👨‍🚀", name:"Lior Ben-David",role:"Lead Cloud Architect",  bio:"Multi-cloud specialist. Has migrated 40+ enterprise environments without a single incident.", socials:["in","gh"] },
  // { bg:"from-[#d4f0f4] to-[#a0c8d0]", face:"👩‍💼", name:"Amara Diallo",  role:"Data Engineering Lead", bio:"Builds real-time data systems that process billions of events per day at sub-second latency.", socials:["in","𝕏"] },
  // { bg:"from-[#f4e4d4] to-[#d0b8a0]", face:"👨‍💻", name:"James Kowalski",role:"Principal Engineer",    bio:"Microservices and distributed systems expert. Maintainer of two open-source projects with 8K stars.", socials:["gh","𝕏"] },
  // { bg:"from-[#d4d4f4] to-[#a0a0d0]", face:"👩‍🔬", name:"Yuki Tanaka",   role:"DevOps Lead",           bio:"Kubernetes evangelist. Reduced deployment cycles from weeks to minutes for 20+ enterprise clients.", socials:["in","gh"] },
];

export function Teams() {
  return (
    <section id="team" className="bg-bg2 px-8 lg:px-16 py-24">
      <div className="flex justify-between items-end mb-14 gap-10 flex-wrap">
        <div>
          <div className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-accent mb-3.5 flex items-center gap-2">
            <span className="block w-5 h-[1.5px] bg-accent" /> The people
          </div>
          <h2 className="reveal font-cabinet font-black text-[clamp(2.2rem,4vw,3.8rem)] tracking-[-0.04em] leading-[1.05] text-ink">
            Meet the Team
          </h2>
        </div>
        <p className="reveal font-epilogue text-[1rem] leading-[1.8] text-ink2 max-w-120">
          Experienced engineers, architects, and strategists — united by a commitment to building things that last.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {TEAM.map((m, i) => (
          <div
            key={i}
            className={`team-card bg-card border border-border overflow-hidden cursor-none transition-colors duration-200 hover:border-accent reveal ${i%4===1?"delay-1":i%4===2?"delay-2":i%4===3?"delay-3":""}`}
          >
            <div className={`h-65 flex items-end justify-center bg-linear-to-b ${m.bg} relative overflow-hidden`}>
              <div className="w-27.5 h-35 rounded-t-[60px] bg-black/10 flex items-start justify-center pt-4.5 mb-px">
                <span className="text-[3.5rem]">{m.face}</span>
              </div>
            </div>
            <div className="p-5.5">
              <div className="font-cabinet font-black text-[1.05rem] text-ink tracking-[-0.02em] mb-1">{m.name}</div>
              <div className="font-mono text-[0.65rem] uppercase tracking-[0.08em] text-accent mb-2.5">{m.role}</div>
              <p className="text-[0.82rem] leading-[1.65] text-muted">{m.bio}</p>
              <div className="mt-3.5 flex gap-2.5">
                {m.socials.map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="w-7 h-7 border border-border flex items-center justify-center text-[0.65rem] text-muted cursor-none transition-all hover:bg-ink hover:border-ink hover:text-white"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}