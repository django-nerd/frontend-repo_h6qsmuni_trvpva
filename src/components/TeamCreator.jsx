import { useState } from 'react'

const apiBase = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function TeamCreator() {
  const [form, setForm] = useState({
    name: '',
    game: '',
    country: '',
    captain_user_id: '',
    member_user_ids: '',
  })
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)
    try {
      const payload = {
        name: form.name,
        game: form.game,
        country: form.country,
        captain_user_id: form.captain_user_id,
        member_user_ids: form.member_user_ids
          ? form.member_user_ids.split(',').map((s) => s.trim()).filter(Boolean)
          : [],
      }
      const res = await fetch(`${apiBase}/teams`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to create team')
      setResult({ ok: true, data })
    } catch (err) {
      setResult({ ok: false, error: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white/70 backdrop-blur p-6 rounded-xl shadow border border-gray-100">
      <h2 className="text-xl font-semibold mb-4">Create a Team</h2>
      <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Team name" className="input" required />
        <input name="game" value={form.game} onChange={handleChange} placeholder="Game (e.g., Valorant)" className="input" required />
        <input name="country" value={form.country} onChange={handleChange} placeholder="Country" className="input" required />
        <input name="captain_user_id" value={form.captain_user_id} onChange={handleChange} placeholder="Captain User ID" className="input" required />
        <input name="member_user_ids" value={form.member_user_ids} onChange={handleChange} placeholder="Other member user IDs (comma-separated)" className="input md:col-span-2" />
        <button type="submit" disabled={loading} className="btn-primary md:col-span-2">{loading ? 'Creating...' : 'Create Team'}</button>
      </form>
      {result && (
        <div className="mt-4 text-sm">
          {result.ok ? (
            <pre className="bg-green-50 border border-green-200 p-3 rounded overflow-auto">{JSON.stringify(result.data, null, 2)}</pre>
          ) : (
            <p className="text-red-600">{result.error}</p>
          )}
        </div>
      )}
    </div>
  )
}
