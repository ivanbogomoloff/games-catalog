export interface Game {
  id: string
  title: string
  description: string
  screenshots: string[]
  order?: number
  sourceCode?: string | null
}

export interface GamesData {
  games: Game[]
}
