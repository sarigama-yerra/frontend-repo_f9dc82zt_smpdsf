import React from 'react'
import { TrendingUp, TimerReset, ShieldCheck, Boxes } from 'lucide-react'

const items = [
  { icon: TimerReset, title: 'Zeitersparnis', kpi: '–70% manuelle Steps', copy: 'Routineaufgaben verschwinden, Teams konzentrieren sich auf Impact.' },
  { icon: TrendingUp, title: 'Output', kpi: '+30% Durchsatz', copy: 'Mehr erledigt – ohne Burnout. Echtzeit-Optimierungen halten Flows im grünen Bereich.' },
  { icon: ShieldCheck, title: 'Fehlerquote', kpi: '–70% Fehler', copy: 'Deterministische Bausteine + Guardrails senken die Fehleranfälligkeit signifikant.' },
  { icon: Boxes, title: 'Skalierung', kpi: 'Horizontal + resilient', copy: 'Von 10 auf 10.000 Tasks/min – automatische Lastverteilung inklusive.' },
]

export default function BenefitGrid() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, kpi, copy }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-[#A867F8]/40">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#5A62F2] to-[#A867F8] text-white">
                <Icon size={20} />
              </div>
              <div className="text-xs uppercase tracking-wide text-[#A867F8]">{kpi}</div>
              <h3 className="mt-1 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-slate-300">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
