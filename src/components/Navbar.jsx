import { Menu, Bitcoin, ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md/80 bg-black/30 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-white">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-400 grid place-items-center shadow-[0_0_30px_rgba(16,185,129,0.6)]">
            <Bitcoin className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight">Flux Exchange</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm/6">
          <a href="#markets" className="hover:text-emerald-300 transition-colors">Markets</a>
          <a href="#features" className="hover:text-emerald-300 transition-colors flex items-center gap-1">Products <ChevronDown className="h-4 w-4" /></a>
          <a href="#security" className="hover:text-emerald-300 transition-colors">Security</a>
          <a href="#fees" className="hover:text-emerald-300 transition-colors">Fees</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 rounded-md border border-white/20 hover:border-white/40 transition-colors">Sign in</button>
          <button className="px-4 py-2 rounded-md bg-emerald-400 text-black font-medium hover:bg-emerald-300 transition-colors shadow-[0_0_30px_rgba(16,185,129,0.55)]">Get started</button>
        </div>

        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-white/20">
          <Menu className="h-5 w-5" />
        </button>
      </nav>
    </header>
  );
}
