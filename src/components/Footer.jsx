import React from 'react'
import { Twitter, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 border-t border-white/10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500" />
            <span className="text-white font-semibold">AeroFlow</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-300">
            <a href="#" className="hover:text-white">Über uns</a>
            <a href="#" className="hover:text-white">Kontakt</a>
            <a href="#" className="hover:text-white">Datenschutz</a>
            <a href="#" className="hover:text-white">AGB</a>
          </nav>

          <div className="flex items-center gap-4 text-slate-300">
            <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter size={18} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin size={18} /></a>
            <a href="#" aria-label="GitHub" className="hover:text-white"><Github size={18} /></a>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-slate-500">© {new Date().getFullYear()} AeroFlow – Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  )
}
