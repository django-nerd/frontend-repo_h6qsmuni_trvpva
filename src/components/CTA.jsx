import { motion } from "framer-motion"

export default function CTA() {
  return (
    <section id="cta" className="relative bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            Ready to dominate?
          </h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Spin up your profile, build your team, and issue your first challenge today.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="/" className="px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow-lg hover:shadow-xl transition">Launch App</a>
            <a href="#leaderboard" className="px-6 py-3 rounded-xl bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15 transition">View Leaderboard</a>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -top-10 h-40 bg-gradient-to-t from-cyan-400/10 via-fuchsia-500/10 to-transparent blur-3xl" />
    </section>
  )
}
