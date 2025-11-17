import { useState, useEffect } from "react";
import { Menu, X, Bitcoin, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md/80 bg-black/30 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-white">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-400 grid place-items-center shadow-[0_0_30px_rgba(16,185,129,0.6)]">
            <Bitcoin className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight">Flux Exchange</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm/6">
          <a href="#markets" className="hover:text-emerald-300 transition-colors">Markets</a>
          <a href="#features" className="hover:text-emerald-300 transition-colors flex items-center gap-1">Products <ChevronDown className="h-4 w-4" /></a>
          <a href="#security" className="hover:text-emerald-300 transition-colors">Security</a>
          <a href="#fees" className="hover:text-emerald-300 transition-colors">Fees</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#get-started" className="px-4 py-2 rounded-md border border-white/20 hover:border-white/40 transition-colors">Sign in</a>
          <a href="#get-started" className="px-4 py-2 rounded-md bg-emerald-400 text-black font-medium hover:bg-emerald-300 transition-colors shadow-[0_0_30px_rgba(16,185,129,0.55)]">Get started</a>
        </div>

        <button aria-label="Toggle menu" onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-white/20">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/90 text-white backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-1">
            <a onClick={close} href="#markets" className="block px-3 py-2 rounded-md hover:bg-white/5">Markets</a>
            <a onClick={close} href="#features" className="block px-3 py-2 rounded-md hover:bg-white/5">Products</a>
            <a onClick={close} href="#security" className="block px-3 py-2 rounded-md hover:bg-white/5">Security</a>
            <a onClick={close} href="#fees" className="block px-3 py-2 rounded-md hover:bg-white/5">Fees</a>
            <div className="h-px bg-white/10 my-2" />
            <a onClick={close} href="#get-started" className="block px-3 py-2 rounded-md bg-emerald-400 text-black font-medium hover:bg-emerald-300">Get started</a>
          </div>
        </div>
      )}
    </header>
  );
}
