import * as React from 'react'
import { TileModel } from 'src/Tile/Tile'
import { Grid } from '../Grid/Grid'
import { PawnModel } from '../Pawn/Pawn'
import { Title } from '../Title/Title'
import './Board.css'

const Board = ({ pawns, tiles }: BoardProps) => (
  <div className="Board">
    <Title/>
    <Grid size={11} tiles={tiles} pawns={pawns} />
  </div>
)

export { Board }

export interface BoardProps {
  pawns: PawnModel[]
  tiles: TileModel[]
}
