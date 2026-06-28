import { Header } from './components/Header'
import { GameList } from './components/GameList'
import { useGames } from './hooks/useGames'

export default function App() {
  const { games, loading, error } = useGames()

  return (
    <div className="app">
      <Header />

      <main className="main">
        {loading && <p className="status-message">Загрузка каталога...</p>}
        {error && <p className="status-message status-message--error">{error}</p>}
        {!loading && !error && games.length === 0 && (
          <p className="status-message">Каталог пуст. Добавьте игры в games.json</p>
        )}
        {!loading && !error && games.length > 0 && <GameList games={games} />}
      </main>

      <footer className="footer">
        <p>Каталог браузерных игр</p>
      </footer>
    </div>
  )
}
