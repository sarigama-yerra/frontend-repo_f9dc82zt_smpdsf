import React from 'react'

const testimonials = [
  {
    quote: 'AeroFlow hat unsere Onboarding-Zeit halbiert und sorgt dafür, dass keine Aufgabe mehr liegen bleibt.',
    name: 'Lena Hartmann',
    role: 'Operations Lead',
    company: 'Orbitly'
  },
  {
    quote: 'Die KI-Empfehlungen sind Gold wert – wir finden Bottlenecks, bevor sie zum Problem werden.',
    name: 'Tomás Ortega',
    role: 'Head of Delivery',
    company: 'NovaStack'
  },
  {
    quote: 'Endlich ein Tool, das einfach zu bedienen ist und trotzdem Enterprise-Features bietet.',
    name: 'Maya Schulz',
    role: 'Product Managerin',
    company: 'CloudShift'
  },
]

export default function Testimonials() {
  return (
    <section id="demo" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Was Teams über AeroFlow sagen</h2>
          <p className="mt-3 text-slate-400">Echte Ergebnisse, echte Wirkung</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <blockquote className="text-slate-200">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-400">
                <span className="font-medium text-white">{t.name}</span> · {t.role}, {t.company}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
