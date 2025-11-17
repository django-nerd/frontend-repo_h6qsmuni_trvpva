import { memo } from "react"

const CyberBG = memo(function CyberBG() {
  return (
    <div className="pointer-events-none select-none absolute inset-0 -z-10">
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      <div className="absolute inset-0 bg-[radial-gradient(80rem_40rem_at_120%_-20%,rgba(0,229,255,0.18),transparent),radial-gradient(50rem_40rem_at_-20%_120%,rgba(255,61,129,0.18),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,.5),rgba(0,0,0,.1))]" />
    </div>
  )
})

export default CyberBG
