import Navbar from './components/Navbar'
import FullLanding from './components/FullLanding'
import './components/CyberpunkTheme.css'

function App() {
  return (
    <div className="relative min-h-screen bg-[color:var(--cp-bg)]">
      <Navbar />
      <FullLanding />
    </div>
  )
}

export default App
