import * as React from 'react'
import { Tile, TileModel } from 'src/Tile/Tile'
import { Pawn, PawnModel } from '../Pawn/Pawn'
import { Title } from '../Title/Title'
import './Board.css'

export class Board extends React.PureComponent<BoardProps> {
  private tileSize: number

  constructor(props: BoardProps) {
    super(props)
    this.tileSize = 1 / props.size
  }

  render() {
    const { tiles, pawns, pawnClick, disabled, enabledPawns } = this.props

    return <div className="Board">
      <Title/>
      <div className="inner">
        {tiles.map((tile, i) => (
          <Tile
            key={i}
            {...tile}
            size={this.tileSize} />
          )
        )}
        {pawns.map((pawn, i) => (
          <Pawn
            key={i}
            pawn={pawn}
            size={this.tileSize}
            click={pawnClick}
            disabled={disabled || !enabledPawns.includes(pawn)} />
          )
        )}
      </div>
    </div>
  }
}

export interface BoardProps {
  disabled: boolean
  enabledPawns: PawnModel[]
  /**
   * Amount of tiles
   */
  size: number
  tiles: TileModel[]
  pawns: PawnModel[]
  pawnClick(pawn: PawnModel): void
}
