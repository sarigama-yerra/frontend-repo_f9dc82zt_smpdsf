import React from 'react'
import { Clock3, ShieldCheck, Users } from 'lucide-react'

const benefits = [
  {
    icon: Clock3,
    title: 'Zeitersparnis',
    desc: 'Reduziere wiederkehrende Aufgaben um bis zu 70% und konzentriere dich aufs Wesentliche.'
  },
  {
    icon: ShieldCheck,
    title: 'Fehlerreduktion',
    desc: 'Automatisierte Abläufe verringern manuelle Fehler und erhöhen Qualität.'
  },
  {
    icon: Users,
    title: 'Team-Effizienz',
    desc: 'Bringe Transparenz in Prozesse und verbessere Zusammenarbeit in Echtzeit.'
  },
]

export default function Benefits() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-sky-500 text-white">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
