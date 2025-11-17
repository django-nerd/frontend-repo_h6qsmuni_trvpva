import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import ErrorBoundary from "./ErrorBoundary"

export default function Hero() {
  const [SplineComp, setSplineComp] = useState(null)

  useEffect(() => {
    let mounted = true
    import("@splinetool/react-spline")
      .then((m) => {
        if (mounted) setSplineComp(() => m.default)
      })
      .catch(() => {
        if (mounted) setSplineComp(null)
      })
    return () => { mounted = false }
  }, [])

  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-[color:var(--cp-bg)]">
      {/* Cyberpunk gradient mesh */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60rem_30rem_at_100%_0%,rgba(0,229,255,.18),transparent),radial-gradient(40rem_30rem_at_0%_0%,rgba(252,238,9,.2),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,.45),rgba(0,0,0,.15))]" />
      </div>

      {/* 3D Spline scene with error fallback */}
      <div className="pointer-events-none select-none absolute left-1/2 -translate-x-1/2 top-[-10%] w-[1200px] h-[800px] opacity-70">
        <ErrorBoundary fallback={<div className="hidden md:block absolute inset-0 rounded-3xl bg-[radial-gradient(50rem_30rem_at_50%_50%,rgba(0,229,255,.15),transparent)]" /> }>
          {SplineComp ? (
            <SplineComp scene="https://prod.spline.design/7bO8zQ8aQpG4N4Kp/scene.splinecode" />
          ) : null}
        </ErrorBoundary>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 ring-1 ring-[color:var(--cp-yellow)]/40 text-white/80 text-xs">
            Night City Protocol
          </span>
          <h1 className="mt-6 text-5xl md:text-7xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-[color:var(--cp-yellow)] to-white/60 leading-tight cp-neon">
            Claim the Grid. Rule the Bracket.
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Assemble your crew, drop challenges, lock venues, and climb the ladder. Neon-fast, zero friction.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#cta" className="px-5 py-3 rounded-xl font-extrabold bg-[color:var(--cp-yellow)] text-slate-900 shadow-[0_0_24px_rgba(252,238,9,0.35)] hover:shadow-[0_0_34px_rgba(252,238,9,0.55)] transition">Launch</a>
            <a href="#features" className="px-5 py-3 rounded-xl bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15 transition">Explore</a>
          </div>
        </motion.div>

        {/* Neon floating orbs */}
        <div className="pointer-events-none select-none">
          <motion.div className="absolute -top-6 left-16 h-28 w-28 rounded-full" style={{ background: "radial-gradient(circle at 30% 30%, var(--cp-pink), transparent)" }} animate={{ y: [0, -20, 0] }} transition={{ duration: 8, repeat: Infinity }} />
          <motion.div className="absolute top-40 -right-10 h-32 w-32 rounded-full" style={{ background: "radial-gradient(circle at 70% 30%, var(--cp-cyan), transparent)" }} animate={{ y: [0, 30, 0] }} transition={{ duration: 10, repeat: Infinity }} />
          <motion.div className="absolute bottom-10 left-1/3 h-24 w-24 rounded-full" style={{ background: "radial-gradient(circle at 50% 50%, var(--cp-yellow), transparent)" }} animate={{ y: [0, -15, 0] }} transition={{ duration: 12, repeat: Infinity }} />
        </div>
      </div>

      {/* Grid overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
    </section>
  )
}
