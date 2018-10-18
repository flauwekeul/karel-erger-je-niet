import * as React from 'react'
import { Pawn, PawnModel } from 'src/Pawn/Pawn'
import { Tile, TileModel } from 'src/Tile/Tile'
import './Grid.css'

export class Grid extends React.PureComponent<GridProps> {
    private tileSize: number

    constructor(props: GridProps) {
        super(props)
        this.tileSize = 1 / props.size
    }

    render() {
        const { tiles, pawns, pawnClick } = this.props

        return <div className="Grid">
            {tiles.map((tile, i) => <Tile key={i} {...tile} size={this.tileSize} />)}
            {pawns.map((pawn, i) => <Pawn key={i} pawn={pawn} size={this.tileSize} click={pawnClick} />)}
        </div>
    }
}

export interface GridProps {
    /**
     * Amount of tiles
     */
    size: number
    tiles: TileModel[]
    pawns: PawnModel[]
    pawnClick(pawn: PawnModel): void
}
