const TESTI = [
  { av:"MR", avBg:"bg-[#1a4fd4]",   name:"Marcus Reid",    role:"CTO — Vantage Logistics",    quote:"Nexcore completely overhauled our legacy infrastructure in under three months. Zero downtime during migration, 40% reduction in cloud costs. Genuinely exceptional execution." },
  { av:"SL", avBg:"bg-[#d4501a]",   name:"Sophia Laurent", role:"Head of IT — Finara Group",  quote:"The security audit they ran surfaced vulnerabilities our in-house team missed for two years. Their remediation process was systematic, fast, and thorough. We sleep better now." },
  { av:"JK", avBg:"bg-[#1ad45a] text-ink", name:"James Kwame",   role:"Founder — Prism Health",      quote:"We scaled from 10K to 2M users in 18 months and the platform didn't flinch once. The architecture they designed is now one of our biggest competitive advantages." },
  { av:"AN", avBg:"bg-[#6d1ad4]",   name:"Aisha Nkrumah",  role:"VP Engineering — Orbis Retail", quote:"Their managed support team has a faster response time than most internal IT departments I've worked with. The SLA isn't just a document — they actually live by it every day." },
  { av:"DP", avBg:"bg-[#d4a01a] text-ink", name:"Daniel Park",   role:"Chief Data Officer — Keltec Energy", quote:"The data platform Nexcore built processes 4TB a day flawlessly. Our analysts now make decisions in minutes that used to take weeks. Transformative work." },
  { av:"RV", avBg:"bg-[#1aafd4]",   name:"Reem Vasquez",   role:"CISO — Meridian Finance",    quote:"SOC 2 and ISO 27001 in 6 months. I thought that was impossible. Nexcore delivered on schedule, on budget, and our auditors were impressed by the documentation quality." },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-ink px-8 lg:px-16 py-24">
      <div className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-accent mb-3.5 flex items-center gap-2">
        <span className="block w-5 h-[1.5px] bg-accent" /> Client voices
      </div>
      <h2 className="reveal font-cabinet font-black text-[clamp(2.2rem,4vw,3.8rem)] tracking-[-0.04em] leading-[1.05] text-white mb-4">
        What Our Clients Say
      </h2>
      <p className="reveal font-epilogue text-[1rem] leading-[1.8] text-darkmuted max-w-120">
        Dont take our word for it — heres what the people who hired us have to say.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-14">
        {TESTI.map((t, i) => (
          <div
            key={i}
            className={`testi-card relative bg-dark border border-darkborder2 p-9 transition-colors duration-200 hover:border-accent reveal ${i%3===1?"delay-1":i%3===2?"delay-2":""}`}
          >
            <span className="absolute top-7 right-7 font-mono text-[0.65rem] text-darkborder2">
              0{i + 1}
            </span>
            <div className="flex gap-1 mb-5">
              {[...Array(5)].map((_, j) => <span key={j} className="text-accent text-[0.85rem]">★</span>)}
            </div>
            <p className="text-[0.95rem] italic leading-[1.8] text-muted mb-7">{t.quote}</p>
            <div className="flex items-center gap-3.5 border-t border-darkborder2 pt-5">
              <div className={`w-10.5 h-10.5 rounded-full flex items-center justify-center font-cabinet font-black text-[0.95rem] text-white shrink-0 ${t.avBg}`}>
                {t.av}
              </div>
              <div>
                <div className="font-cabinet font-bold text-[0.95rem] text-white">{t.name}</div>
                <div className="font-mono text-[0.62rem] uppercase tracking-[0.08em] text-darkmuted2 mt-0.5">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}