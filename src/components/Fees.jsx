import { Percent, CheckCircle2 } from "lucide-react";

const tiers = [
  { label: "Maker", value: "0.02%" },
  { label: "Taker", value: "0.06%" },
  { label: "Withdrawal", value: "Dynamic" },
];

const perks = [
  "Zero fees on stablecoin pairs for launch window",
  "VIP discounts based on 30D volume",
  "Rebates for market makers",
];

export default function Fees() {
  return (
    <section id="fees" className="relative py-20 bg-black text-white scroll-mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.12),transparent_45%)] pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5">
            <Percent className="h-4 w-4 text-cyan-300" />
            <span className="text-xs text-white/70">Transparent pricing</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">Simple, competitive fees</h2>
          <p className="mt-3 text-white/70">No surprises. Discounts scale with your activity.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.label} className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
              <div className="text-sm text-white/60">{t.label}</div>
              <div className="mt-2 text-3xl font-semibold">{t.value}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h3 className="text-lg font-medium">Perks</h3>
          <ul className="mt-4 grid sm:grid-cols-2 gap-3">
            {perks.map((p) => (
              <li key={p} className="flex items-start gap-2 text-white/80">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-400" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
