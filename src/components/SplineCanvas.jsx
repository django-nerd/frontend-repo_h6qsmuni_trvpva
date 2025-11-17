import { useEffect, useState } from "react"
import ErrorBoundary from "./ErrorBoundary"

export default function SplineCanvas({ scene, className = "" }) {
  const [SplineComp, setSplineComp] = useState(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let mounted = true
    import("@splinetool/react-spline")
      .then((m) => {
        if (mounted) setSplineComp(() => m.default)
      })
      .catch(() => {
        if (mounted) setFailed(true)
      })
    return () => {
      mounted = false
    }
  }, [])

  if (failed) return null

  return (
    <div className={className}>
      <ErrorBoundary fallback={null}>
        {SplineComp ? <SplineComp scene={scene} /> : null}
      </ErrorBoundary>
    </div>
  )
}
