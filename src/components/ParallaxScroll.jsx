import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function ParallaxScroll({ children, className = "", speed = 0.2, yFrom = -60, yTo = 60 }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [yFrom * speed, yTo * speed])

  useEffect(() => {
    return () => {
      y.destroy?.()
    }
  }, [y])

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}
