import React from 'react'

const logos = [
  'NebulaWorks', 'QuantumLayer', 'PulseGrid', 'NovaStack', 'Orbitly', 'CortexLabs'
]

export default function Trust() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <p className="text-center text-sm font-medium text-slate-400">
          Powered by more than <span className="text-white">1,400</span> innovative teams worldwide
        </p>
        <div className="mt-6 grid grid-cols-2 items-center gap-6 opacity-80 sm:grid-cols-3 md:grid-cols-6">
          {logos.map((name) => (
            <div key={name} className="flex h-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] p-4 text-slate-300">
              <span className="text-sm font-semibold tracking-wide opacity-80">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
