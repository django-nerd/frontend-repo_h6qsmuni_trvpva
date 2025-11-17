import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import ParallaxShowcase from './components/ParallaxShowcase'
import CTA from './components/CTA'
import TeamCreator from './components/TeamCreator'
import Leaderboard from './components/Leaderboard'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <ParallaxShowcase />
      <Features />

      {/* App preview widgets */}
      <section id="leaderboard" className="bg-slate-950 py-20">
        <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.04] p-6">
            <h3 className="text-white text-xl font-semibold mb-4">Create a Team</h3>
            <TeamCreator />
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.04] p-6">
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

      <style>{`
        .input { @apply w-full border border-white/10 rounded-lg px-3 py-2 bg-white/5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500; }
        .btn-primary { @apply inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white text-slate-900 font-medium hover:bg-slate-100 transition; }
      `}</style>
    </div>
  )
}

export default App
