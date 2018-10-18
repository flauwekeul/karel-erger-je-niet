import * as React from 'react'
import { TileModel } from 'src/Tile/Tile'
import { Grid } from '../Grid/Grid'
import { PawnModel } from '../Pawn/Pawn'
import { Title } from '../Title/Title'
import './Board.css'

const Board = ({ pawns, tiles, pawnClick }: BoardProps) => (
  <div className="Board">
    <Title/>
    <Grid size={11} tiles={tiles} pawns={pawns} pawnClick={pawnClick} />
  </div>
)

export { Board }

export interface BoardProps {
  pawns: PawnModel[]
  tiles: TileModel[]
  pawnClick(pawn: PawnModel): void
}
