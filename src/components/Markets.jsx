import { ArrowUpRight, ArrowDownRight, Activity } from "lucide-react";

const rows = [
  { pair: "BTC/USDT", price: 65342.12, change: 1.82, volume: 1245.3 },
  { pair: "ETH/USDT", price: 3120.45, change: -0.64, volume: 987.1 },
  { pair: "SOL/USDT", price: 189.22, change: 3.91, volume: 562.7 },
  { pair: "ARB/USDT", price: 1.82, change: 0.42, volume: 230.4 },
  { pair: "DOGE/USDT", price: 0.1823, change: -2.12, volume: 842.9 },
];

function formatNumber(n) {
  return n.toLocaleString(undefined, { maximumFractionDigits: 2 });
}

export default function Markets() {
  return (
    <section id="markets" className="relative py-20 bg-black text-white scroll-mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(34,211,238,0.1),transparent_40%),radial-gradient(circle_at_90%_0%,rgba(16,185,129,0.1),transparent_40%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Live markets</h2>
            <p className="mt-2 text-white/70">Tight spreads, deep liquidity, and real-time updates.</p>
          </div>
          <a href="#get-started" className="hidden sm:inline-flex items-center gap-1 px-4 py-2 rounded-md bg-white/10 hover:bg-white/15 border border-white/10 transition-colors">
            <Activity className="h-4 w-4" />
            Start trading
          </a>
        </div>

        <div className="mt-8 rounded-xl border border-white/10 bg-white/5 overflow-hidden">
          <div className="grid grid-cols-12 px-4 py-3 text-sm text-white/60">
            <div className="col-span-4">Pair</div>
            <div className="col-span-3">Price</div>
            <div className="col-span-3">24h Change</div>
            <div className="col-span-2 text-right">24h Vol (M)</div>
          </div>
          <div className="divide-y divide-white/10">
            {rows.map((r) => {
              const up = r.change >= 0;
              return (
                <a key={r.pair} href="#get-started" className="grid grid-cols-12 px-4 py-4 hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
                  <div className="col-span-4 flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-400" />
                    <div>
                      <div className="font-medium">{r.pair}</div>
                      <div className="text-xs text-white/60">Spot · Perp</div>
                    </div>
                  </div>
                  <div className="col-span-3 font-mono">${formatNumber(r.price)}</div>
                  <div className={`col-span-3 flex items-center gap-1 ${up ? "text-emerald-400" : "text-rose-400"}`}>
                    {up ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                    <span className="font-mono">{Math.abs(r.change).toFixed(2)}%</span>
                  </div>
                  <div className="col-span-2 text-right font-mono">{formatNumber(r.volume)}</div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
