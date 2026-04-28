const logos = ["VANTAGE","FINARA","PRISM","ORBIS","KELTEC","SYNAPSE","MERIDIAN"];

export default function Clients() {
  return (
    <div className="px-8 lg:px-16 py-12 bg-bg2 border-t border-b border-border flex items-center gap-12 flex-wrap">
      <span className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted whitespace-nowrap">
        Trusted by
      </span>
      <div className="flex gap-12 flex-wrap items-center">
        {logos.map((l) => (
          <span
            key={l}
            className="c-logo font-cabinet font-black text-[1.1rem] text-border tracking-[-0.03em] transition-colors hover:text-ink2 cursor-default"
          >
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}