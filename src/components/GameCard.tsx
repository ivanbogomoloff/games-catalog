import { useState } from 'react'
import type { Game } from '../types/game'

interface GameCardProps {
  game: Game
}

export function GameCard({ game }: GameCardProps) {
  const [activeScreenshot, setActiveScreenshot] = useState(0)

  return (
    <article className="game-card">
      <div className="game-card__screenshots">
        <div className="game-card__main-image">
          <img
            src={game.screenshots[activeScreenshot]}
            alt={`${game.title} — скриншот ${activeScreenshot + 1}`}
          />
        </div>
        {game.screenshots.length > 1 && (
          <div className="game-card__thumbs">
            {game.screenshots.map((src, index) => (
              <button
                key={src}
                type="button"
                className={`game-card__thumb${index === activeScreenshot ? ' game-card__thumb--active' : ''}`}
                onClick={() => setActiveScreenshot(index)}
                aria-label={`Скриншот ${index + 1}`}
              >
                <img src={src} alt="" />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="game-card__info">
        <h2 className="game-card__title">{game.title}</h2>
        <p className="game-card__description">{game.description}</p>
        <div className="game-card__actions">
          <a href={`/play/${game.id}/`} className="game-card__play-btn">
            ▶ Играть
          </a>
          {game.sourceCode && (
            <a
              href={game.sourceCode}
              className="game-card__source-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Исходный код
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
