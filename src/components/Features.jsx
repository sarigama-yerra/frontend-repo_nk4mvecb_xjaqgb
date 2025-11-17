import { Shield, Rocket, LineChart, Cpu } from "lucide-react";

const features = [
  {
    title: "Next-gen matching engine",
    desc: "Ultra-low latency and high throughput engineered for professional traders.",
    icon: Rocket,
  },
  {
    title: "Bank-grade security",
    desc: "99.99% uptime, audited smart contracts, and multi-sig cold storage.",
    icon: Shield,
  },
  {
    title: "Advanced analytics",
    desc: "Heatmaps, depth charts, and on-chain insights at your fingertips.",
    icon: LineChart,
  },
  {
    title: "API-first platform",
    desc: "Robust WebSocket and REST APIs for algos, market makers, and funds.",
    icon: Cpu,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,0.15),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(34,211,238,0.12),transparent_40%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Built for performance</h2>
          <p className="mt-3 text-white/70">Everything you need to trade confidently in volatile markets.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ title, desc, icon: Icon }) => (
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
