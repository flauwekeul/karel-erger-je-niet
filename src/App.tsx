import * as React from 'react'
import './App.css'
import { Grid } from './Grid/Grid'
import { Tile, TileModel } from './tile/Tile'
import { Title } from './Title/Title'

const tiles: TileModel[] = [
  // start tiles
  { x: 0, y: 0, color: Tile.colors[0], type: 'start' },
  { x: 1, y: 0, color: Tile.colors[0], type: 'start' },
  { x: 0, y: 1, color: Tile.colors[0], type: 'start' },
  { x: 1, y: 1, color: Tile.colors[0], type: 'start' },
  { x: 9, y: 0, color: Tile.colors[1], type: 'start' },
  { x: 10, y: 0, color: Tile.colors[1], type: 'start' },
  { x: 9, y: 1, color: Tile.colors[1], type: 'start' },
  { x: 10, y: 1, color: Tile.colors[1], type: 'start' },
  { x: 9, y: 9, color: Tile.colors[2], type: 'start' },
  { x: 10, y: 9, color: Tile.colors[2], type: 'start' },
  { x: 9, y: 10, color: Tile.colors[2], type: 'start' },
  { x: 10, y: 10, color: Tile.colors[2], type: 'start' },
  { x: 0, y: 9, color: Tile.colors[3], type: 'start' },
  { x: 1, y: 9, color: Tile.colors[3], type: 'start' },
  { x: 0, y: 10, color: Tile.colors[3], type: 'start' },
  { x: 1, y: 10, color: Tile.colors[3], type: 'start' },

  // finish tiles
  { x: 1, y: 5, color: Tile.colors[0], type: 'finish' },
  { x: 2, y: 5, color: Tile.colors[0], type: 'finish' },
  { x: 3, y: 5, color: Tile.colors[0], type: 'finish' },
  { x: 4, y: 5, color: Tile.colors[0], type: 'finish' },
  { x: 5, y: 1, color: Tile.colors[1], type: 'finish' },
  { x: 5, y: 2, color: Tile.colors[1], type: 'finish' },
  { x: 5, y: 3, color: Tile.colors[1], type: 'finish' },
  { x: 5, y: 4, color: Tile.colors[1], type: 'finish' },
  { x: 6, y: 5, color: Tile.colors[2], type: 'finish' },
  { x: 7, y: 5, color: Tile.colors[2], type: 'finish' },
  { x: 8, y: 5, color: Tile.colors[2], type: 'finish' },
  { x: 9, y: 5, color: Tile.colors[2], type: 'finish' },
  { x: 5, y: 6, color: Tile.colors[3], type: 'finish' },
  { x: 5, y: 7, color: Tile.colors[3], type: 'finish' },
  { x: 5, y: 8, color: Tile.colors[3], type: 'finish' },
  { x: 5, y: 9, color: Tile.colors[3], type: 'finish' },

  // path tiles
  { x: 0, y: 4, next: 'right', type: 'spawn', color: Tile.colors[0] },
  { x: 1, y: 4, next: 'right', type: 'path' },
  { x: 2, y: 4, next: 'right', type: 'path' },
  { x: 3, y: 4, next: 'right', type: 'path' },
  { x: 4, y: 4, next: 'up', type: 'path' },
  { x: 4, y: 3, next: 'up', type: 'path' },
  { x: 4, y: 2, next: 'up', type: 'path' },
  { x: 4, y: 1, next: 'up', type: 'path' },
  { x: 4, y: 0, next: 'right', type: 'path' },
  { x: 5, y: 0, next: 'right', type: 'path' },
  { x: 6, y: 0, next: 'down', type: 'spawn', color: Tile.colors[1] },
  { x: 6, y: 1, next: 'down', type: 'path' },
  { x: 6, y: 2, next: 'down', type: 'path' },
  { x: 6, y: 3, next: 'down', type: 'path' },
  { x: 6, y: 4, next: 'right', type: 'path' },
  { x: 7, y: 4, next: 'right', type: 'path' },
  { x: 8, y: 4, next: 'right', type: 'path' },
  { x: 9, y: 4, next: 'right', type: 'path' },
  { x: 10, y: 4, next: 'down', type: 'path' },
  { x: 10, y: 5, next: 'down', type: 'path' },
  { x: 10, y: 6, next: 'left', type: 'spawn', color: Tile.colors[2] },
  { x: 9, y: 6, next: 'left', type: 'path' },
  { x: 8, y: 6, next: 'left', type: 'path' },
  { x: 7, y: 6, next: 'left', type: 'path' },
  { x: 6, y: 6, next: 'down', type: 'path' },
  { x: 6, y: 7, next: 'down', type: 'path' },
  { x: 6, y: 8, next: 'down', type: 'path' },
  { x: 6, y: 9, next: 'down', type: 'path' },
  { x: 6, y: 10, next: 'left', type: 'path' },
  { x: 5, y: 10, next: 'left', type: 'path' },
  { x: 4, y: 10, next: 'up', type: 'spawn', color: Tile.colors[3] },
  { x: 4, y: 9, next: 'up', type: 'path' },
  { x: 4, y: 8, next: 'up', type: 'path' },
  { x: 4, y: 7, next: 'up', type: 'path' },
  { x: 4, y: 6, next: 'left', type: 'path' },
  { x: 3, y: 6, next: 'left', type: 'path' },
  { x: 2, y: 6, next: 'left', type: 'path' },
  { x: 1, y: 6, next: 'left', type: 'path' },
  { x: 0, y: 6, next: 'up', type: 'path' },
  { x: 0, y: 5, next: 'up', type: 'path' },
]

const App = () => (
  <div className="App">
    <Title/>
    <Grid size={11} gutter={0.8} tiles={tiles} />
  </div>
)

export default App
