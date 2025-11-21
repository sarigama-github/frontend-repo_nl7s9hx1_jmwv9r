import { Menu, X, Orbit } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20 w-full">
      <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-white/90 to-orange-300/60 flex items-center justify-center shadow-inner shadow-white/30 ring-1 ring-white/30">
            <Orbit className="h-6 w-6 text-slate-900" />
          </div>
          <span className="text-xl font-semibold tracking-tight text-white">VoyageArc</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#solutions" className="text-slate-200/90 hover:text-white transition">Solutions</a>
          <a href="#products" className="text-slate-200/90 hover:text-white transition">Products</a>
          <a href="#pricing" className="text-slate-200/90 hover:text-white transition">Pricing</a>
          <a href="#company" className="text-slate-200/90 hover:text-white transition">Company</a>
          <a href="#contact" className="px-4 py-2 rounded-lg bg-white text-slate-900 font-medium hover:shadow-lg hover:shadow-orange-500/20 transition">Get a demo</a>
        </div>

        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/10 ring-1 ring-white/20 text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mx-4 rounded-xl bg-slate-900/80 backdrop-blur-md ring-1 ring-white/10 text-white">
          <div className="px-6 py-4 flex flex-col gap-3">
            <a href="#solutions" className="py-2">Solutions</a>
            <a href="#products" className="py-2">Products</a>
            <a href="#pricing" className="py-2">Pricing</a>
            <a href="#company" className="py-2">Company</a>
            <a href="#contact" className="mt-2 px-4 py-2 rounded-lg bg-white text-slate-900 font-medium text-center">Get a demo</a>
          </div>
        </div>
      )}
    </header>
  );
}
