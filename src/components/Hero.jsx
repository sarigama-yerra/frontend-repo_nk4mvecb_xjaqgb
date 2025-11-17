import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-white/80">Live now: Markets, Spot, Earn</span>
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05]">
            Trade crypto with institutional-grade speed and security
          </h1>
          <p className="mt-4 text-white/80 text-lg sm:text-xl max-w-2xl">
            Deep liquidity, lightning-fast execution, and military-grade security. Unlock the future of finance with the exchange built for performance.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#get-started" className="px-5 py-3 rounded-md bg-emerald-400 text-black font-medium hover:bg-emerald-300 transition-colors shadow-[0_0_40px_rgba(16,185,129,0.6)]">Start trading</a>
            <a href="#learn" className="px-5 py-3 rounded-md border border-white/20 hover:border-white/40">Explore markets</a>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              ['$24B+', '24h Volume'],
              ['350+', 'Trading Pairs'],
              ['99.99%', 'Uptime'],
              ['<10ms', 'Order Latency'],
            ].map(([k, v]) => (
              <div key={v} className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-semibold">{k}</div>
                <div className="text-white/70 text-sm mt-1">{v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
