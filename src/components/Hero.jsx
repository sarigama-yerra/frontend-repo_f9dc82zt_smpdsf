import React from 'react'
import Spline from '@splinetool/react-spline'
import { Play, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient field */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(90,98,242,0.2),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Copy */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#5A62F2] to-[#A867F8] shadow-[0_0_10px_rgba(168,103,248,0.8)]"></span>
              No credit card required
            </div>

            <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Automate Everything. Accelerate Anything.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              AeroFlow ist das KI-gestützte Automation-Framework, das Teams befähigt, komplexe Workflows in Minuten zu bauen.
            </p>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <a href="#pricing" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#5A62F2] to-[#A867F8] px-5 py-3 text-white shadow-lg shadow-indigo-500/30 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-indigo-400">
                Start Free Trial
                <ArrowRight size={18} />
              </a>
              <a href="#demo" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20">
                <Play size={18} /> Watch Interactive Demo
              </a>
            </div>

            <p className="mt-4 text-sm text-slate-400">Setup unter 5 Minuten • SOC2-ready • Enterprise SSO</p>
          </div>

          {/* Visual: layered dashboard mock + Spline */}
          <div className="relative aspect-square w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-br from-[#5A62F2]/10 via-indigo-400/5 to-[#A867F8]/10 shadow-2xl"
            >
              <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </motion.div>

            {/* Floating cards with parallax on hover */}
            <div className="absolute inset-0">
              <motion.div whileHover={{ y: -4 }} className="absolute -top-6 left-6 w-40 rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur">
                <div className="h-4 w-24 rounded bg-gradient-to-r from-[#5A62F2] to-[#A867F8]" />
                <div className="mt-2 h-2 w-28 rounded bg-white/20" />
              </motion.div>
              <motion.div whileHover={{ y: -6 }} className="absolute top-10 -right-4 w-52 rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur">
                <div className="flex items-center justify-between">
                  <div className="h-3 w-16 rounded bg-white/20" />
                  <div className="h-6 w-6 rounded-md bg-gradient-to-br from-[#5A62F2] to-[#A867F8]" />
                </div>
                <div className="mt-3 h-2 w-full rounded bg-white/15" />
                <div className="mt-1 h-2 w-4/5 rounded bg-white/10" />
              </motion.div>
              <motion.div whileHover={{ y: -8 }} className="absolute bottom-6 left-10 w-48 rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur">
                <div className="grid grid-cols-4 gap-2">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="h-8 rounded-md bg-gradient-to-br from-[#5A62F2]/40 to-[#A867F8]/40" />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
