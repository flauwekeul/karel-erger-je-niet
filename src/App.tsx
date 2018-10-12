import * as React from 'react'
import './App.css'
import { direction, Tile } from './tile/Tile'
import { Title } from './Title/Title'

const startTiles = [
  { x: 0, y: 0, color: Tile.colors[0] },
  { x: 1, y: 0, color: Tile.colors[0] },
  { x: 0, y: 1, color: Tile.colors[0] },
  { x: 1, y: 1, color: Tile.colors[0] },
  { x: 9, y: 0, color: Tile.colors[1] },
  { x: 10, y: 0, color: Tile.colors[1] },
  { x: 9, y: 1, color: Tile.colors[1] },
  { x: 10, y: 1, color: Tile.colors[1] },
  { x: 9, y: 9, color: Tile.colors[2] },
  { x: 10, y: 9, color: Tile.colors[2] },
  { x: 9, y: 10, color: Tile.colors[2] },
  { x: 10, y: 10, color: Tile.colors[2] },
  { x: 0, y: 9, color: Tile.colors[3] },
  { x: 1, y: 9, color: Tile.colors[3] },
  { x: 0, y: 10, color: Tile.colors[3] },
  { x: 1, y: 10, color: Tile.colors[3] },
]

const pathTiles = [
  { x: 0, y: 4, next: 'right' as direction },
  { x: 1, y: 4, next: 'right' as direction },
  { x: 2, y: 4, next: 'right' as direction },
  { x: 3, y: 4, next: 'right' as direction },
  { x: 4, y: 4, next: 'up' as direction },
  { x: 4, y: 3, next: 'up' as direction },
  { x: 4, y: 2, next: 'up' as direction },
  { x: 4, y: 1, next: 'up' as direction },
  { x: 4, y: 0, next: 'right' as direction },
  { x: 5, y: 0, next: 'right' as direction },
  { x: 6, y: 0, next: 'down' as direction },
  { x: 6, y: 1, next: 'down' as direction },
  { x: 6, y: 2, next: 'down' as direction },
  { x: 6, y: 3, next: 'down' as direction },
  { x: 6, y: 4, next: 'right' as direction },
  { x: 7, y: 4, next: 'right' as direction },
  { x: 8, y: 4, next: 'right' as direction },
  { x: 9, y: 4, next: 'right' as direction },
  { x: 10, y: 4, next: 'down' as direction },
  { x: 10, y: 5, next: 'down' as direction },
  { x: 10, y: 6, next: 'left' as direction },
  { x: 9, y: 6, next: 'left' as direction },
  { x: 8, y: 6, next: 'left' as direction },
  { x: 7, y: 6, next: 'left' as direction },
  { x: 6, y: 6, next: 'down' as direction },
  { x: 6, y: 7, next: 'down' as direction },
  { x: 6, y: 8, next: 'down' as direction },
  { x: 6, y: 9, next: 'down' as direction },
  { x: 6, y: 10, next: 'left' as direction },
  { x: 5, y: 10, next: 'left' as direction },
  { x: 4, y: 10, next: 'up' as direction },
  { x: 4, y: 9, next: 'up' as direction },
  { x: 4, y: 8, next: 'up' as direction },
  { x: 4, y: 7, next: 'up' as direction },
  { x: 4, y: 6, next: 'left' as direction },
  { x: 3, y: 6, next: 'left' as direction },
  { x: 2, y: 6, next: 'left' as direction },
  { x: 1, y: 6, next: 'left' as direction },
  { x: 0, y: 6, next: 'up' as direction },
  { x: 0, y: 5, next: 'up' as direction },
]

const App = () => (
  <div className="App">
    <Title />

    {pathTiles.map((tile, i) => {
      const eleventh = i / 10
      const color = Number.isInteger(eleventh) ? Tile.colors[eleventh] : undefined

      return <Tile key={i} index={i} {...tile} color={color} />
    })}

    {startTiles.map((tile, i) => <Tile key={i} index={i} {...tile} />)}
  </div>
)

export default App
