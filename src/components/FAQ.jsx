import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  { q: 'Wie schnell kann ich starten?', a: 'In unter fünf Minuten. Templates, vorgefertigte Trigger und ein geführtes Onboarding bringen dich sofort in die Umsetzung.' },
  { q: 'Brauche ich Entwickler?', a: 'Nein. Der visuelle Builder ist no-code. Für komplexe Fälle können optionale Code-Nodes eingebunden werden.' },
  { q: 'Wie sicher ist AeroFlow?', a: 'Enterprise-Security: SSO/SAML, Audit-Logs, Verschlüsselung at-rest & in-transit, Granular RBAC und IP-Whitelisting.' },
  { q: 'Welche Integrationen gibt es?', a: 'Über 120 Integrationen – von CRM bis Cloud. Eigene Endpunkte lassen sich per Webhook oder SDK anbinden.' },
  { q: 'Wie funktioniert die Abrechnung?', a: 'Monatlich oder jährlich. Jährlich gibt es 15% Rabatt. Ab Pro-Plan flexible Nutzerpakete.' },
  { q: 'Gibt es Support?', a: 'Ja. E-Mail und Community im Starter, Prioritätssupport im Pro und dedizierter CSM im Enterprise.' },
]

function Item({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between text-left">
        <span className="text-sm font-medium text-white">{q}</span>
        <ChevronDown className={`h-4 w-4 text-slate-400 transition ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`grid transition-[grid-template-rows,opacity] duration-300 ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <p className="pt-3 text-sm text-slate-300">{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="relative">
      <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <h2 className="text-center text-3xl font-black text-white md:text-4xl">FAQ</h2>
        <div className="mt-8 space-y-4">
          {faqs.map((f) => (
            <Item key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
