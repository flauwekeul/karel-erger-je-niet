import * as React from 'react';
import './App.css';
import Tile from './tile/Tile';

const tiles = [
  { x: 0, y: 4 },
  { x: 1, y: 4 },
  { x: 2, y: 4 },
  { x: 3, y: 4 },
  { x: 4, y: 4 },
  { x: 4, y: 3 },
  { x: 4, y: 2 },
  { x: 4, y: 1 },
  { x: 4, y: 0 },
  { x: 5, y: 0 },
  { x: 6, y: 0 },
  { x: 6, y: 1 },
  { x: 6, y: 2 },
  { x: 6, y: 3 },
  { x: 6, y: 4 },
  { x: 7, y: 4 },
  { x: 8, y: 4 },
  { x: 9, y: 4 },
  { x: 10, y: 4 },
  { x: 10, y: 5 },
  { x: 10, y: 6 },
  { x: 9, y: 6 },
  { x: 8, y: 6 },
  { x: 7, y: 6 },
  { x: 6, y: 6 },
  { x: 6, y: 7 },
  { x: 6, y: 8 },
  { x: 6, y: 9 },
  { x: 6, y: 10 },
  { x: 5, y: 10 },
  { x: 4, y: 10 },
  { x: 4, y: 9 },
  { x: 4, y: 8 },
  { x: 4, y: 7 },
  { x: 4, y: 6 },
  { x: 3, y: 6 },
  { x: 2, y: 6 },
  { x: 1, y: 6 },
  { x: 0, y: 6 },
  { x: 0, y: 5 },
  { x: 0, y: 4 },
]

const App = () => {
  const offset = 4
  const margin = 1
  const size = ((100 - 2 * offset) / 11) - (2 * margin);

  return <div className="App">
    {tiles.map((tile, i) => <Tile
      {...tile}
      key={i}
      size={size}
      margin={margin}
      offset={offset}
    />)}
  </div>
};

export default App;
