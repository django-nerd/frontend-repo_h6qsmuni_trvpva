import { useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function ParallaxShowcase() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 60])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -40])

  useEffect(() => {
    // ensures transforms update
  }, [])

  return (
    <section ref={ref} className="relative bg-slate-950 py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">Immersive by Design</h2>
          <p className="mt-3 text-white/70">Layered parallax with futuristic glow to set the mood.</p>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div style={{ y: y1 }} className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6">
          <div className="aspect-[16/9] rounded-2xl bg-[radial-gradient(60rem_30rem_at_130%_-20%,rgba(99,102,241,0.35),transparent),radial-gradient(40rem_25rem_at_-30%_120%,rgba(236,72,153,0.35),transparent)] ring-1 ring-white/10" />
        </motion.div>
        <motion.div style={{ y: y2 }} className="absolute -left-6 -bottom-10 hidden md:block h-28 w-28 rounded-full bg-fuchsia-500/30 blur-2xl" />
        <motion.div style={{ y: y3 }} className="absolute -right-6 -top-10 hidden md:block h-32 w-32 rounded-full bg-cyan-400/30 blur-2xl" />
      </div>
    </section>
  )
}
