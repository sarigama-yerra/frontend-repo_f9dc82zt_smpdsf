import React from 'react'
import Hero from './components/Hero'
import Trust from './components/Trust'
import Features from './components/Features'
import BenefitGrid from './components/BenefitGrid'
import DeepFeatures from './components/DeepFeatures'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0F0F12] text-slate-100 selection:bg-indigo-500/30 selection:text-white">
      {/* Global ambience gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_0%,rgba(90,98,242,0.12)_0%,transparent_55%)]" />
        <div className="absolute -top-40 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,rgba(90,98,242,0.15),rgba(168,103,248,0.15),transparent_60%)] blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-20 backdrop-blur supports-[backdrop-filter]:bg-white/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#5A62F2] to-[#A867F8] shadow-[0_0_24px_rgba(168,103,248,0.35)]" />
            <span className="text-lg font-semibold tracking-tight text-white">AeroFlow</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#deep" className="hover:text-white">AI</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#" className="hidden rounded-xl border border-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/10 md:inline-flex">Sign in</a>
            <a href="#pricing" className="inline-flex items-center rounded-xl bg-gradient-to-r from-[#5A62F2] to-[#A867F8] px-4 py-2 text-sm font-medium text-white shadow-md shadow-indigo-500/30 transition hover:brightness-110">Start Free Trial</a>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="relative z-10">
        <Hero />
        <div id="features"><Trust /></div>
        <Features />
        <DeepFeatures />
        <BenefitGrid />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>

      <Footer />
    </div>
  )
}

export default App
