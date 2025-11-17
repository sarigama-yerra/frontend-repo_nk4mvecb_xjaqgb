import { ShieldCheck, Lock, KeySquare, FileCheck2 } from "lucide-react";

const items = [
  {
    title: "Cold storage custody",
    desc: "Majority of assets secured in multi-sig cold wallets with strict withdrawal policies.",
    icon: Lock,
  },
  {
    title: "Multi-factor auth",
    desc: "Device binding, passkeys, and hardware key support for every account.",
    icon: KeySquare,
  },
  {
    title: "Audited + monitored",
    desc: "Independent security audits and 24/7 on-chain monitoring for anomalies.",
    icon: FileCheck2,
  },
];

export default function Security() {
  return (
    <section id="security" className="relative py-20 bg-black text-white scroll-mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05),transparent_60%)] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span className="text-xs text-white/70">Security first</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">Institutional-grade protection</h2>
          <p className="mt-3 text-white/70">Defense-in-depth across custody, access, and monitoring so you can trade with confidence.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-emerald-400 to-cyan-400 grid place-items-center text-black shadow-[0_0_25px_rgba(16,185,129,0.5)]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-medium text-lg">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
