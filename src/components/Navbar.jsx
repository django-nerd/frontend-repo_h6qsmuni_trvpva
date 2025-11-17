import { Menu, Gamepad2, Trophy, Users } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <div className="sticky top-0 z-50">
      <div className="backdrop-blur-xl bg-white/10 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 shadow-lg shadow-fuchsia-500/30 ring-1 ring-white/30 flex items-center justify-center">
              <Gamepad2 className="h-5 w-5 text-white" />
            </div>
            <span className="text-white font-black tracking-tight text-xl">
              GameSphere
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#leaderboard" className="hover:text-white transition flex items-center gap-2"><Trophy className="h-4 w-4"/>Leaderboard</a>
            <a href="#teams" className="hover:text-white transition flex items-center gap-2"><Users className="h-4 w-4"/>Teams</a>
            <a href="#cta" className="px-4 py-2 rounded-lg bg-white text-slate-900 font-medium shadow hover:shadow-lg transition">Get Started</a>
          </nav>
          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
            <Menu />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-slate-900/80 backdrop-blur-xl border-b border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-3 text-white/90">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#leaderboard" className="hover:text-white transition">Leaderboard</a>
            <a href="#teams" className="hover:text-white transition">Teams</a>
            <a href="#cta" className="px-4 py-2 rounded-lg bg-white text-slate-900 font-medium shadow w-max">Get Started</a>
          </div>
        </div>
      )}
    </div>
  )
}
