import React from 'react'
import { Workflow, Gauge, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Workflow,
    title: 'Automatisierung per Drag & Drop',
    desc: 'Baue komplexe Workflows mit einem visuellen Editor – ganz ohne Code.'
  },
  {
    icon: Gauge,
    title: 'Intelligente Prozessoptimierung',
    desc: 'KI schlägt Verbesserungen vor, priorisiert Engpässe und lernt aus Verlauf.'
  },
  {
    icon: BarChart3,
    title: 'Team-Dashboards & Echtzeit-Reports',
    desc: 'Behalte Fortschritt, Auslastung und KPIs in Echtzeit im Blick.'
  },
]

export default function Features() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Was AeroFlow besonders macht</h2>
          <p className="mt-3 text-slate-400">Funktionen, die Teams schneller machen</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-sky-500 text-white shadow-lg">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-slate-300">{desc}</p>

              {/* hover gradient */}
              <div className="pointer-events-none absolute -inset-px opacity-0 transition group-hover:opacity-100" style={{ background: 'radial-gradient(40% 40% at 50% 0%, rgba(99,102,241,0.25), transparent 60%)' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
