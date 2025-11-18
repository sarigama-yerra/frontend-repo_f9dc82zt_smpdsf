import React from 'react'
import Hero from './components/Hero'
import Trust from './components/Trust'
import Features from './components/Features'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* subtle top gradient */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(80%_50%_at_50%_0%,rgba(56,189,248,0.08)_0%,transparent_60%)]" />

      {/* Header */}
      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500" />
            <span className="text-lg font-semibold text-white">AeroFlow</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#features" className="hover:text-white">Funktionen</a>
            <a href="#pricing" className="hover:text-white">Preise</a>
            <a href="#demo" className="hover:text-white">Kunden</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#" className="hidden rounded-xl border border-white/15 px-4 py-2 text-sm text-white hover:bg-white/10 md:inline-flex">Anmelden</a>
            <a href="#pricing" className="inline-flex items-center rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 px-4 py-2 text-sm font-medium text-white shadow-md shadow-indigo-500/30">Kostenlos testen</a>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="relative z-10">
        <Hero />
        <div id="features"><Trust /></div>
        <Features />
        <Benefits />
        <Testimonials />
        <Pricing />
      </main>

      <Footer />
    </div>
  )
}

export default App
