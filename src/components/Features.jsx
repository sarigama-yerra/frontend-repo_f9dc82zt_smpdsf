import React from 'react'
import { Workflow, Gauge, BarChart3, Command } from 'lucide-react'

const items = [
  {
    key: 'flowbuilder',
    icon: Workflow,
    tag: 'FlowBuilder',
    title: 'Drag & Drop Automations',
    desc: 'Visueller Builder für Ende-zu-Ende Prozesse. Verzweigungen, Fehlerpfade und Wiederholungen – ohne eine Zeile Code.',
    mock: (
      <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3">
        <div className="flex items-center gap-2">
          <div className="h-3 w-24 rounded bg-white/20" />
          <div className="h-3 w-10 rounded bg-white/10" />
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-14 rounded-md bg-gradient-to-br from-[#5A62F2]/30 to-[#A867F8]/30" />
          ))}
        </div>
      </div>
    ),
  },
  {
    key: 'insightai',
    icon: Gauge,
    tag: 'InsightAI',
    title: 'Predictive Process Optimization',
    desc: 'Prognosen auf Basis realer Laufzeiten. Frühwarnungen bei Engpässen und automatische Vorschläge zur Lastverteilung.',
    mock: (
      <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3">
        <div className="flex items-center justify-between">
          <div className="h-3 w-28 rounded bg-white/20" />
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-[#5A62F2] to-[#A867F8]" />
        </div>
        <div className="mt-3 h-24 rounded-md bg-gradient-to-t from-[#5A62F2]/20 to-transparent" />
      </div>
    ),
  },
  {
    key: 'commandhub',
    icon: Command,
    tag: 'CommandHub',
    title: 'Unified Team Control Panel',
    desc: 'Globale Steuerung aller Flows, Rollenrechte, Audit-Log und Live-Overrides – zentral und sicher.',
    mock: (
      <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3">
        <div className="flex items-center gap-2">
          <div className="h-3 w-16 rounded bg-white/20" />
          <div className="h-3 w-10 rounded bg-white/10" />
        </div>
        <div className="mt-3 grid grid-cols-4 gap-2">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-10 rounded-md bg-white/10" />
          ))}
        </div>
      </div>
    ),
  },
]

export default function Features() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-black text-white md:text-4xl">Core Features</h2>
          <p className="mt-3 text-slate-400">Baut Workflows, die sich wie Zukunft anfühlen</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map(({ key, icon: Icon, tag, title, desc, mock }) => (
            <div key={key} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#5A62F2] to-[#A867F8] text-white shadow-lg">
                <Icon size={20} />
              </div>
              <div className="text-xs uppercase tracking-wide text-[#A867F8]">{tag}</div>
              <h3 className="mt-1 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-slate-300">{desc}</p>
              {mock}

              <div className="pointer-events-none absolute -inset-px opacity-0 transition group-hover:opacity-100" style={{ background: 'radial-gradient(40% 40% at 50% 0%, rgba(168,103,248,0.15), transparent 60%)' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
