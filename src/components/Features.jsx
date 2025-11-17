import { motion } from "framer-motion"
import { Users, Trophy, Building2, ShieldCheck, CalendarDays, Swords } from "lucide-react"

const features = [
  {
    icon: Swords,
    title: "Challenge Engine",
    desc: "Propose, negotiate, approve and play matches with a clear lifecycle.",
  },
  {
    icon: Building2,
    title: "Venue Bookings",
    desc: "Real-time venue scheduling and confirmations with admins.",
  },
  {
    icon: Trophy,
    title: "Dynamic Leaderboards",
    desc: "Points and stats update instantly after each match.",
  },
  {
    icon: Users,
    title: "Team Management",
    desc: "Create squads, assign captains and track achievements.",
  },
  {
    icon: CalendarDays,
    title: "Match Formats",
    desc: "BO1 to BO5 with per-map results and future veto support.",
  },
  {
    icon: ShieldCheck,
    title: "Fair Play",
    desc: "Audit trails on approvals and bookings to keep things clean.",
  },
]

export default function Features() {
  return (
    <section id="features" className="relative bg-slate-950 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">Built for Competition</h2>
          <p className="mt-4 text-white/70">All the tools teams and venues need to compete and grow.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.04] p-6 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.2)_inset,0_10px_40px_-10px_rgba(168,85,247,0.3)] transition"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 ring-1 ring-white/30 flex items-center justify-center">
                <f.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-white text-lg font-semibold">{f.title}</h3>
              <p className="text-white/70 text-sm mt-1">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* soft glow */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-20 h-40 bg-gradient-to-b from-fuchsia-500/10 to-transparent blur-3xl" />
    </section>
  )
}
