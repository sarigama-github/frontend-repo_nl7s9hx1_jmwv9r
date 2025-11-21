import { Shield, CreditCard, Plane, Code2 } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Compliance-first by design',
    desc: 'PCI, SOC2, PSD2-ready controls, with audit trails and granular permissions.'
  },
  {
    icon: CreditCard,
    title: 'Embedded finance',
    desc: 'Issuing, payouts, and escrow built in. Tokenized cards and smart routing.'
  },
  {
    icon: Plane,
    title: 'Travel-grade reliability',
    desc: 'Inventory sync, NDC/EDIFACT adapters, and real-time disruption handling.'
  },
  {
    icon: Code2,
    title: 'Developer-first',
    desc: 'Modern APIs, great SDKs, and clear docs to ship faster.'
  }
]

export default function Features() {
  return (
    <section id="solutions" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.15),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Infrastructure for travel fintech</h2>
          <p className="mt-3 text-white/70">Everything you need to launch, scale, and secure mission-critical experiences.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl bg-slate-900/60 ring-1 ring-white/10 p-6 hover:bg-slate-900/80 transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-white to-orange-300 text-slate-900 flex items-center justify-center shadow-md">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-white font-medium">{title}</h3>
              <p className="mt-2 text-white/70 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
