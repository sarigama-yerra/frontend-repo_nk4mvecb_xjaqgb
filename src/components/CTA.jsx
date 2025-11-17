export default function CTA() {
  return (
    <section id="get-started" className="py-20 bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-tr from-emerald-500/20 via-cyan-500/10 to-emerald-500/20 p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Ready to experience frictionless crypto trading?</h3>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Create your account in minutes and start trading with deep liquidity, tight spreads, and top-tier security.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#" className="px-5 py-3 rounded-md bg-emerald-400 text-black font-medium hover:bg-emerald-300 transition-colors shadow-[0_0_30px_rgba(16,185,129,0.55)]">Create account</a>
            <a href="#" className="px-5 py-3 rounded-md border border-white/20 hover:border-white/40">View fees</a>
          </div>
        </div>
      </div>
    </section>
  );
}
