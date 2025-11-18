import React from 'react'

const logos = [
  { name: 'Orbitly', initials: 'OR' },
  { name: 'NovaStack', initials: 'NS' },
  { name: 'CloudShift', initials: 'CS' },
  { name: 'ZenOps', initials: 'ZO' },
  { name: 'PolarIQ', initials: 'PI' },
]

export default function Trust() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <p className="text-center text-sm font-medium text-slate-400">
          Vertrauen von über <span className="text-white">1.200</span> Teams
        </p>
        <div className="mt-6 grid grid-cols-2 items-center gap-6 opacity-80 sm:grid-cols-3 md:grid-cols-5">
          {logos.map((l) => (
            <div key={l.name} className="flex h-16 items-center justify-center rounded-xl border border-white/10 bg-white/5 p-4 text-slate-300">
              <span className="font-semibold tracking-wide">{l.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
