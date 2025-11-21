import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      {/* Spline 3D cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Gradient overlay to enhance white→orange glow without blocking interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-orange-500/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24 flex flex-col items-start">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />
          Fintech + Travel Infrastructure
        </span>
        <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white max-w-3xl leading-tight">
          VoyageArc — software that moves money and people.
        </h1>
        <p className="mt-4 text-lg text-white/80 max-w-2xl">
          We build secure rails for modern travel and payments: seamless bookings, embedded finance, and compliance-first orchestration.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-5 py-3 font-medium shadow-lg shadow-orange-500/20 hover:translate-y-[-1px] transition">Request a demo</a>
          <a href="#solutions" className="inline-flex items-center justify-center rounded-lg bg-white/10 text-white px-5 py-3 font-medium ring-1 ring-white/20 hover:bg-white/15 transition">Explore solutions</a>
        </div>
      </div>
    </section>
  );
}
