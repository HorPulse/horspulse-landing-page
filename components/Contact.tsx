"use client";

const INFO = [
  { icon:"📍", label:"Headquarters",   val:["42 Innovation Drive, Tech Quarter","San Francisco, CA 94105"] },
  { icon:"📞", label:"Phone",          val:["+1 (415) 000-0000"] },
  { icon:"✉️", label:"Email",          val:["hello@nexcore.io"] },
  { icon:"🕐", label:"Business Hours", val:["Mon – Fri, 8am – 6pm PST","Emergency support available 24/7"] },
];

const SERVICES_LIST = ["Cloud Architecture","Cybersecurity","DevOps & CI/CD","Custom Software","Data Engineering","Managed IT Support"];

export function Contact() {
  return (
    <section id="contact" className="bg-bg2 border-t border-border px-8 lg:px-16 py-24">
      <div className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-accent mb-3.5 flex items-center gap-2">
        <span className="block w-5 h-[1.5px] bg-accent" /> <span>Get in touch</span>
      </div>
      <h2 className="reveal font-cabinet font-black text-[clamp(2.2rem,4vw,3.8rem)] tracking-[-0.04em] leading-[1.05] text-ink mb-4">
        Start a Conversation
      </h2>
      <p className="reveal font-epilogue text-[1rem] leading-[1.8] text-ink2 max-w-120">
        Whether you have a specific project or just a challenge to solve — we&#39;d love to hear from you. We typically respond within 4 hours.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-14 items-start">
        {/* Info */}
        <div className="reveal-l flex flex-col gap-8">
          {INFO.map((c) => (
            <div key={c.label} className="flex gap-4 items-start">
              <div className="w-11 h-11 bg-card border border-border flex items-center justify-center text-lg shrink-0">{c.icon}</div>
              <div>
                <div className="font-mono text-[0.65rem] uppercase tracking-widest text-muted mb-1">{c.label}</div>
                {c.val.map((v, i) => (
                  <div key={i} className={`text-[0.95rem] font-medium text-ink ${i === 1 ? "text-[0.85rem] text-muted font-normal" : ""}`}>{v}</div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="reveal-r bg-card border border-border p-12">
          <div className="grid grid-cols-2 gap-4 mb-5">
            {["First Name","Last Name"].map((p) => (
              <div key={p}>
                <label className="font-mono text-[0.65rem] uppercase tracking-widest text-muted block mb-2">{p}</label>
                <input placeholder={p==="First Name"?"Jane":"Smith"} className="w-full bg-bg border border-border text-ink font-epilogue text-[0.9rem] px-4 py-3 outline-none focus:border-accent transition-colors cursor-none" />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div>
              <label className="font-mono text-[0.65rem] uppercase tracking-widest text-muted block mb-2">Company</label>
              <input placeholder="Acme Corp" className="w-full bg-bg border border-border text-ink font-epilogue text-[0.9rem] px-4 py-3 outline-none focus:border-accent transition-colors cursor-none" />
            </div>
            <div>
              <label className="font-mono text-[0.65rem] uppercase tracking-widest text-muted block mb-2">Service Interest</label>
              <select className="w-full bg-bg border border-border text-ink font-epilogue text-[0.9rem] px-4 py-3 outline-none focus:border-accent transition-colors cursor-none appearance-none">
                <option value="">Select a service…</option>
                {SERVICES_LIST.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
          </div>
          <div className="mb-5">
            <label className="font-mono text-[0.65rem] uppercase tracking-widest text-muted block mb-2">Email</label>
            <input type="email" placeholder="jane@acmecorp.com" className="w-full bg-bg border border-border text-ink font-epilogue text-[0.9rem] px-4 py-3 outline-none focus:border-accent transition-colors cursor-none" />
          </div>
          <div className="mb-5">
            <label className="font-mono text-[0.65rem] uppercase tracking-widest text-muted block mb-2">Tell us about your project</label>
            <textarea placeholder="Describe your challenge, timeline, and goals…" rows={5} className="w-full bg-bg border border-border text-ink font-epilogue text-[0.9rem] px-4 py-3 outline-none focus:border-accent transition-colors cursor-none resize-y" />
          </div>
          <button className="w-full bg-ink text-bg font-mono text-[0.75rem] uppercase tracking-widest py-4.5 cursor-none hover:bg-accent transition-colors flex items-center justify-center gap-2.5">
            Send Message <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}