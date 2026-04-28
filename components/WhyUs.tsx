const METRICS = [
  { label:"Uptime",    val:"99.9%", w:"99.9%" },
  { label:"On-time",  val:"96%",   w:"96%" },
  { label:"Retention",val:"94%",   w:"94%" },
  { label:"CSAT",     val:"4.9/5", w:"98%" },
];

const POINTS = [
  { icon:"🔭", title:"Strategic, Not Just Technical",  desc:"We start every engagement by understanding your business goals, not just your ticket list. Technology decisions are always tied to measurable outcomes." },
  { icon:"🔒", title:"Security by Default",            desc:"Security isn't a checkbox we add at the end. Every system we design is built with threat modeling, least-privilege access, and audit trails from day one." },
  { icon:"📡", title:"Radical Transparency",           desc:"Weekly progress reports, live dashboards, and direct Slack access to your engineering lead. You'll never be left wondering what's happening." },
  { icon:"♾️", title:"Long-Term Partnership",          desc:"94% of our clients renew year over year. We're invested in your long-term success, not just the initial delivery milestone." },
];

export default function WhyUs() {
  return (
    <section className="bg-bg px-8 lg:px-16 py-24">
      <div className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-accent mb-3.5 flex items-center gap-2">
        <span className="block w-5 h-[1.5px] bg-accent" />Why Nexcore
      </div>
      <h2 className="reveal font-cabinet font-black text-[clamp(2.2rem,4vw,3.8rem)] tracking-[-0.04em] leading-[1.05] text-ink mb-0">
        Built on Proof,<br />Not Promise
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-14 items-center">
        {/* Visual */}
        <div className="reveal-l">
          <div className="relative bg-card border border-border p-10">
            <div className="absolute top-1px left-10 w-15 h-0.75 bg-accent" />
            <div className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted mb-7">
              Performance Benchmarks
            </div>
            <div className="flex flex-col gap-5">
              {METRICS.map((m) => (
                <div key={m.label} className="flex items-center gap-4">
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-muted w-20">{m.label}</span>
                  <div className="flex-1 h-1.5 bg-bg2 overflow-hidden">
                    <div
                      className="h-full bg-accent bar-animated"
                      style={{ ["--bar-w" as string]: m.w }}
                    />
                  </div>
                  <span className="font-cabinet font-black text-[0.95rem] text-ink w-11 text-right">{m.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Points */}
        <div className="reveal-r flex flex-col gap-7">
          {POINTS.map((p) => (
            <div key={p.title} className="flex gap-5 items-start">
              <div className="w-11 h-11 bg-bg2 border border-border flex items-center justify-center text-xl shrink-0">
                {p.icon}
              </div>
              <div>
                <div className="font-cabinet font-black text-[1rem] text-ink mb-1.5">{p.title}</div>
                <p className="text-[0.88rem] leading-[1.7] text-ink2">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}