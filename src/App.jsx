import TeamCreator from './components/TeamCreator'
import Leaderboard from './components/Leaderboard'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
      <header className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-fuchsia-600">GameSphere</h1>
        <p className="text-gray-600 mt-2">Create teams, challenge rivals, book venues, and climb the leaderboard.</p>
      </header>

      <main className="max-w-5xl mx-auto px-6 grid gap-8 md:grid-cols-2 pb-20">
        <TeamCreator />
        <Leaderboard />
      </main>

      <style>{`
        .input { @apply w-full border rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500; }
        .btn-primary { @apply inline-flex items-center justify-center px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition; }
      `}</style>
    </div>
  )
}

export default App
