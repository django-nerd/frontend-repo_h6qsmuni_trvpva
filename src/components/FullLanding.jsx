import { motion } from "framer-motion"
import SplineCanvas from "./SplineCanvas"
import ParallaxScroll from "./ParallaxScroll"
import CyberBG from "./CyberBG"

function SectionHeading({ kicker, title, subtitle }) {
  return (
    <div className="text-center mb-12">
      {kicker && (
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 ring-1 ring-[color:var(--cp-yellow)]/40 text-white/80 text-xs">
          {kicker}
        </span>
      )}
      <h2 className="mt-4 text-3xl md:text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-[color:var(--cp-yellow)] to-white/60 cp-neon">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-white/70 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  )
}

export default function FullLanding() {
  return (
    <main className="relative bg-[color:var(--cp-bg)] text-white overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center">
        <CyberBG />
        <div className="cp-noise" />
        <div className="cp-scanline" />

        <div className="absolute right-1/2 translate-x-1/2 md:right-4 md:translate-x-0 top-[6%] w-[1200px] h-[800px] opacity-70">
          <SplineCanvas scene="https://prod.spline.design/7bO8zQ8aQpG4N4Kp/scene.splinecode" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 ring-1 ring-[color:var(--cp-yellow)]/40 text-white/80 text-xs">
              Competitive Gaming Platform
            </span>
            <h1 className="mt-6 text-5xl md:text-7xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-[color:var(--cp-yellow)] to-white/60 leading-tight cp-neon">
              Dominate the Night Grid
            </h1>
            <p className="mt-4 text-white/80 max-w-2xl">
              Team up, challenge rivals, and climb the neon leaderboard with live brackets and arenas.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#get-started" className="px-5 py-3 rounded-xl font-extrabold bg-[color:var(--cp-yellow)] text-slate-900 shadow-[0_0_24px_rgba(252,238,9,0.35)] hover:shadow-[0_0_34px_rgba(252,238,9,0.55)] transition">Get Started</a>
              <a href="#features" className="px-5 py-3 rounded-xl bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15 transition">Learn More</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SHOWCASE with scroll parallax cards */}
      <section id="showcase" className="relative py-24">
        <CyberBG />
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading kicker="Neon Systems" title="Engineered for Competitive Play" subtitle="Fast lobbies, smart matchmaking, and dynamic brackets designed for high-stakes nights." />

          <div className="grid md:grid-cols-3 gap-6">
            <ParallaxScroll speed={0.3}>
              <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] p-6 cp-glow overflow-hidden">
                <div className="absolute -top-20 -right-10 h-40 w-40 bg-[radial-gradient(circle_at_70%_30%,var(--cp-cyan),transparent)] blur-2xl opacity-50" />
                <h3 className="text-xl font-bold">Live Brackets</h3>
                <p className="text-white/70 mt-2">Auto-updates with match scores and seeding logic. Zero refresh needed.</p>
                <div className="mt-6 aspect-[16/10] rounded-xl bg-black/40 ring-1 ring-white/10" />
              </div>
            </ParallaxScroll>

            <ParallaxScroll speed={0.15}>
              <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] p-6 cp-glow overflow-hidden">
                <div className="absolute -bottom-24 -left-16 h-52 w-52 bg-[radial-gradient(circle_at_30%_30%,var(--cp-pink),transparent)] blur-2xl opacity-50" />
                <h3 className="text-xl font-bold">Matchmaking AI</h3>
                <p className="text-white/70 mt-2">Latency-aware, ELO-weighted queues keep battles fair and fast.</p>
                <div className="mt-6 aspect-[16/10] rounded-xl bg-black/40 ring-1 ring-white/10" />
              </div>
            </ParallaxScroll>

            <ParallaxScroll speed={0.25}>
              <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] p-6 cp-glow overflow-hidden">
                <div className="absolute -top-16 -left-10 h-40 w-40 bg-[radial-gradient(circle_at_30%_30%,var(--cp-yellow),transparent)] blur-2xl opacity-50" />
                <h3 className="text-xl font-bold">Arena Booking</h3>
                <p className="text-white/70 mt-2">Reserve digital arenas, spectator slots, and content booths in seconds.</p>
                <div className="mt-6 aspect-[16/10] rounded-xl bg-black/40 ring-1 ring-white/10" />
              </div>
            </ParallaxScroll>
          </div>
        </div>
      </section>

      {/* Cinematic panel with 3D on scroll */}
      <section className="relative py-28 overflow-hidden">
        <CyberBG />
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <SectionHeading kicker="Immersion" title="Interactive 3D that never blocks UI" subtitle="We load heavy 3D scenes safely and degrade gracefully to maintain speed and uptime." />
              <ul className="mt-6 space-y-3 text-white/80">
                <li>• Dynamic import prevents hydration crashes</li>
                <li>• Error boundaries show a soft fallback if 3D fails</li>
                <li>• Parallax and glow effects keep motion crisp</li>
              </ul>
            </div>
            <div className="relative h-[420px] rounded-2xl border border-white/10 bg-black/40 overflow-hidden cp-glow">
              <div className="absolute inset-0 opacity-70">
                <SplineCanvas scene="https://prod.spline.design/7bO8zQ8aQpG4N4Kp/scene.splinecode" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section id="get-started" className="relative py-24">
        <CyberBG />
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">Boot the Protocol</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Sign in, spin up a lobby, and ping a rival. Your bracket spins up instantly with live updates and streaming hooks.</p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#" className="btn-primary">Create Account</a>
            <a href="#features" className="px-5 py-3 rounded-xl bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15 transition">View Features</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-black/70 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-12 text-white/70 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Night Grid. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#showcase" className="hover:text-white transition">Showcase</a>
            <a href="#get-started" className="hover:text-white transition">Get Started</a>
            <a href="#" className="hover:text-white transition">Privacy</a>
          </div>
        </div>
      </section>
    </main>
  )
}
