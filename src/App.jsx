import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import ParallaxShowcase from './components/ParallaxShowcase'
import CTA from './components/CTA'
import TeamCreator from './components/TeamCreator'
import Leaderboard from './components/Leaderboard'
import './components/CyberpunkTheme.css'

function App() {
  return (
    <div className="relative min-h-screen bg-[color:var(--cp-bg)]">
      {/* global cyberpunk overlays */}
      <div className="cp-noise" />
      <div className="cp-scanline" />

      <Navbar />
      <Hero />
      <ParallaxShowcase />
      <Features />

      {/* App preview widgets */}
      <section id="leaderboard" className="relative bg-[color:var(--cp-bg)] py-20">
        <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-2">
          <div className="relative rounded-2xl border border-[color:var(--cp-yellow)]/20 bg-gradient-to-b from-white/5 to-white/[0.04] p-6 cp-glow">
            <h3 className="text-white text-xl font-semibold mb-4">Create a Team</h3>
            <TeamCreator />
          </div>
          <div className="relative rounded-2xl border border-[color:var(--cp-yellow)]/20 bg-gradient-to-b from-white/5 to-white/[0.04] p-6 cp-glow">
            <h3 className="text-white text-xl font-semibold mb-4">Top Teams</h3>
            <Leaderboard />
          </div>
        </div>
      </section>

      <CTA />

      <footer className="bg-slate-950/95 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-10 text-white/60 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} GameSphere. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#leaderboard" className="hover:text-white transition">Leaderboard</a>
            <a href="#cta" className="hover:text-white transition">Get Started</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
