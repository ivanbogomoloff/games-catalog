import { useEffect, useState } from 'react'
import type { Game } from '../types/game'

export function useGames() {
  const [games, setGames] = useState<Game[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/games.json')
      .then((res) => {
        if (!res.ok) throw new Error('Не удалось загрузить каталог игр')
        return res.json()
      })
      .then((data) => {
        const sorted = [...data.games].sort(
          (a: Game, b: Game) => (b.order ?? 0) - (a.order ?? 0),
        )
        setGames(sorted)
      })
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return { games, loading, error }
}
