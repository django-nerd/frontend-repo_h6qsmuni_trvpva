import { useEffect, useState } from 'react'

const apiBase = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Leaderboard() {
  const [items, setItems] = useState([])
  const [filters, setFilters] = useState({ scope: 'global', game: '', country: '' })
  const [loading, setLoading] = useState(false)

  const load = async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      params.set('scope', filters.scope)
      if (filters.game) params.set('game', filters.game)
      if (filters.scope === 'local' && filters.country) params.set('country', filters.country)
      const res = await fetch(`${apiBase}/leaderboard?${params.toString()}`)
      const data = await res.json()
      setItems(Array.isArray(data) ? data : [])
    } catch (e) {
      setItems([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <div className="bg-white/70 backdrop-blur p-6 rounded-xl shadow border border-gray-100">
      <div className="flex flex-wrap gap-3 items-end mb-4">
        <div>
          <label className="block text-xs text-gray-600">Scope</label>
          <select value={filters.scope} onChange={(e)=>setFilters(f=>({...f, scope: e.target.value}))} className="input">
            <option value="global">Global</option>
            <option value="local">Local</option>
          </select>
        </div>
        <div>
          <label className="block text-xs text-gray-600">Game</label>
          <input value={filters.game} onChange={(e)=>setFilters(f=>({...f, game: e.target.value}))} placeholder="Any" className="input" />
        </div>
        {filters.scope === 'local' && (
          <div>
            <label className="block text-xs text-gray-600">Country</label>
            <input value={filters.country} onChange={(e)=>setFilters(f=>({...f, country: e.target.value}))} placeholder="Country" className="input" />
          </div>
        )}
        <button onClick={load} className="btn-primary">Refresh</button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="space-y-2">
          {items.map((t, idx) => (
            <div key={t.id} className="p-3 rounded border bg-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-gray-500 w-6 text-right">#{idx+1}</span>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.country} • {t.game}</p>
                </div>
              </div>
              <div className="text-sm text-right">
                <p><span className="font-semibold">Pts:</span> {t.stats?.points ?? 0}</p>
                <p className="text-gray-500">W {t.stats?.wins ?? 0} / L {t.stats?.losses ?? 0} / D {t.stats?.draws ?? 0}</p>
              </div>
            </div>
          ))}
          {items.length === 0 && (
            <p className="text-sm text-gray-500">No teams yet.</p>
          )}
        </div>
      )}
    </div>
  )
}
