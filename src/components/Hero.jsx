import React from 'react'
import Spline from '@splinetool/react-spline'
import { Play, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background aura gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(99,102,241,0.25),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Copy */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-400 to-sky-400 shadow-[0_0_10px_rgba(99,102,241,0.8)]"></span>
              Neu: KI-gestützte Automationen in Sekunden
            </div>

            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Automatisiere deine Workflows mit KI – schneller, smarter, effizienter
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              AeroFlow hilft Teams, repetitive Prozesse zu automatisieren und Zeit zu gewinnen.
            </p>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <a href="#pricing" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 px-5 py-3 text-white shadow-lg shadow-indigo-500/30 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-indigo-400">
                Kostenlos testen
                <ArrowRight size={18} />
              </a>
              <a href="#demo" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20">
                <Play size={18} /> Demo ansehen
              </a>
            </div>

            {/* Small helper text */}
            <p className="mt-4 text-sm text-slate-400">Keine Kreditkarte erforderlich • 14 Tage kostenlos testen</p>
          </div>

          {/* Spline 3D animation */}
          <div className="relative aspect-square w-full">
            <div className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-sky-400/5 to-fuchsia-500/10 shadow-2xl">
              <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
