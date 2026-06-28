import { useState } from 'react'
import type { Game } from '../types/game'
import { GameCard } from './GameCard'
import { Pagination } from './Pagination'

const GAMES_PER_PAGE = 10

interface GameListProps {
  games: Game[]
}

export function GameList({ games }: GameListProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(games.length / GAMES_PER_PAGE)
  const startIndex = (currentPage - 1) * GAMES_PER_PAGE
  const visibleGames = games.slice(startIndex, startIndex + GAMES_PER_PAGE)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="game-list">
      <div className="game-list__grid">
        {visibleGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </section>
  )
}
