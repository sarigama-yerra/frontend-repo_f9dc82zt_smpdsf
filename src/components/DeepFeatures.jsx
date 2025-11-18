import React from 'react'

export default function DeepFeatures() {
  return (
    <section id="deep" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black text-white md:text-4xl">AI Engine, explained</h2>
            <p className="mt-4 text-slate-300">
              Unter der Haube orchestriert AeroFlow ein Echtzeit-Entscheidungsnetz: Ereignisse werden klassifiziert,
              priorisiert und an den richtigen Worker verteilt – millisekundenschnell.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <div className="text-sm font-semibold text-white">Task Classification</div>
                <p className="text-slate-400">NLP-gestützte Zuordnung von Aufgaben zu Flow-Bausteinen. Modelle lernen aus Labels, Laufzeiten und Outcomes.</p>
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Adaptive Trigger Models</div>
                <p className="text-slate-400">Dynamische Schwellenwerte reagieren auf Traffic, SLA und Business-Prioritäten – inkl. Feedback-Schleifen.</p>
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Real-time Load Distribution</div>
                <p className="text-slate-400">Streaming-Queues balancieren Workloads über Cluster. Backpressure & Circuit-Breaker vermeiden Kaskadenfehler.</p>
              </div>
            </div>
          </div>

          {/* before / after */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <div className="text-xs uppercase tracking-wide text-slate-400">Before</div>
                <div className="mt-2 space-y-2">
                  {["E-Mail Weiterleitung", "Manuelle Zuweisung", "Fehlerhafte Priorisierung"].map((t) => (
                    <div key={t} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300">{t}</div>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wide text-slate-400">After</div>
                <div className="mt-2 space-y-2">
                  {["Auto-Parsing + Routing", "AI-Priorisierung", "Live-Auslastung"].map((t) => (
                    <div key={t} className="rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-3 py-2 text-sm text-emerald-200">{t}</div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Scroll-triggered Insights</span>
                <span>Latency: 23ms P95</span>
              </div>
              <div className="mt-3 h-24 rounded-md bg-gradient-to-r from-[#5A62F2]/20 via-[#A867F8]/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
