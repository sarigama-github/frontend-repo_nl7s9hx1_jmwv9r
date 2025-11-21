export default function CTA() {
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_100%,rgba(251,146,60,0.15),transparent)]" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <h3 className="text-3xl sm:text-4xl font-semibold text-white">Let’s architect your Voyage</h3>
        <p className="mt-3 text-white/70 max-w-2xl mx-auto">Tell us about your use case and we’ll craft a tailored demo showing pricing, integrations, and deployment timelines.</p>
        <form className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <input required placeholder="Work email" type="email" className="col-span-2 rounded-lg bg-white/10 text-white placeholder:text-white/60 px-4 py-3 ring-1 ring-white/20 focus:outline-none focus:ring-2 focus:ring-orange-400" />
          <button className="rounded-lg bg-white text-slate-900 px-5 py-3 font-medium shadow-lg shadow-orange-500/20">Request demo</button>
        </form>
        <p className="mt-3 text-xs text-white/60">By continuing you agree to our Terms and Privacy Policy.</p>
      </div>
    </section>
  )
}
