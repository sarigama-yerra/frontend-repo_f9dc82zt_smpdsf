import React from 'react'
import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: '0€',
    period: 'für 14 Tage',
    highlight: false,
    features: [
      '5 aktive Workflows',
      'Grundlegende Bausteine',
      'E-Mail Support',
    ],
    cta: 'Kostenlos testen'
  },
  {
    name: 'Pro',
    price: '39€',
    period: 'pro Nutzer/Monat',
    highlight: true,
    features: [
      'Unbegrenzte Workflows',
      'KI-Empfehlungen',
      'Team-Dashboards',
      'Priorisierte API-Limits'
    ],
    cta: 'Jetzt starten'
  },
  {
    name: 'Enterprise',
    price: 'Kontakt',
    period: 'maßgeschneidert',
    highlight: false,
    features: [
      'SSO & Rollenrechte',
      'Dedizierte Umgebung',
      'SLA & Premium Support',
      'Onboarding & Training'
    ],
    cta: 'Mit Vertrieb sprechen'
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Flexible Preise für jedes Team</h2>
          <p className="mt-3 text-slate-400">Wähle den Plan, der zu deinem Wachstum passt</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`relative rounded-2xl border ${t.highlight ? 'border-indigo-400/40 bg-indigo-400/10' : 'border-white/10 bg-white/5'} p-6`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold text-white">{t.name}</h3>
                {t.highlight && (
                  <span className="rounded-full bg-gradient-to-r from-indigo-500 to-sky-500 px-3 py-1 text-xs text-white">Beliebt</span>
                )}
              </div>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-3xl font-bold text-white">{t.price}</span>
                <span className="text-sm text-slate-400">{t.period}</span>
              </div>

              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-slate-200">
                    <Check className="mt-0.5 h-4 w-4 text-sky-400" /> {f}
                  </li>
                ))}
              </ul>

              <a href="#" className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition ${t.highlight ? 'bg-gradient-to-r from-indigo-500 to-sky-500 text-white' : 'border border-white/15 text-white hover:bg-white/10'}`}>
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
