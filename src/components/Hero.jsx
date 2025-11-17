import { motion } from "framer-motion"
import Spline from "@splinetool/react-spline"

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-slate-950">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(45rem_30rem_at_100%_0%,rgba(56,189,248,.15),transparent),radial-gradient(40rem_30rem_at_0%_0%,rgba(168,85,247,.2),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,.5),rgba(0,0,0,.2))]" />
      </div>

      {/* 3D Spline scene parallax */}
      <div className="pointer-events-none select-none absolute left-1/2 -translate-x-1/2 top-[-10%] w-[1200px] h-[800px] opacity-60">
        <Spline scene="https://prod.spline.design/7bO8zQ8aQpG4N4Kp/scene.splinecode" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/20 text-white/80 text-xs">
            The Next-Gen Competitive Hub
          </span>
          <h1 className="mt-6 text-5xl md:text-7xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 leading-tight">
            Form Teams. Book Venues. Own the Leaderboards.
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Create your squad, challenge rivals, secure slots at premium arenas, and track your rise in real time.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#cta" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow-lg shadow-fuchsia-500/30 hover:shadow-fuchsia-500/50 transition">Get Started</a>
            <a href="#features" className="px-5 py-3 rounded-xl bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15 transition">Explore Features</a>
          </div>
        </motion.div>

        {/* Floating orbs parallax */}
        <div className="pointer-events-none select-none">
          <motion.div className="absolute -top-6 left-16 h-28 w-28 rounded-full bg-fuchsia-500/40 blur-2xl" animate={{ y: [0, -20, 0] }} transition={{ duration: 8, repeat: Infinity }} />
          <motion.div className="absolute top-40 -right-10 h-32 w-32 rounded-full bg-cyan-400/30 blur-2xl" animate={{ y: [0, 30, 0] }} transition={{ duration: 10, repeat: Infinity }} />
          <motion.div className="absolute bottom-10 left-1/3 h-24 w-24 rounded-full bg-indigo-500/30 blur-2xl" animate={{ y: [0, -15, 0] }} transition={{ duration: 12, repeat: Infinity }} />
        </div>
      </div>

      {/* Subtle grid overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
    </section>
  )
}
