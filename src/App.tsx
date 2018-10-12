import * as React from 'react';
import './App.css';
import { direction, Tile } from './tile/Tile';

const tiles = [
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
    {tiles.map((tile, i) => <Tile key={i} index={i} {...tile} />)}
  </div>
);

export default App;
