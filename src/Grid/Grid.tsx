import * as React from 'react'
import { Tile, TileModel } from 'src/tile/Tile'
import './Grid.css'

export class Grid extends React.PureComponent<GridProps> {
    private tileSize: number

    constructor(props: GridProps) {
        super(props)
        this.tileSize = (100 / props.size) - (2 * props.gutter)
    }

    render() {
        const { tiles } = this.props

        return <div className="Grid">
            {tiles.map((tile, i) => {
                const x = this.tilePosition(tile.x)
                const y = this.tilePosition(tile.y)

                return <Tile key={i} {...tile} x={x} y={y} size={this.tileSize} />
            })}
        </div>
    }

    private tilePosition(coordinate: number) {
        const { gutter } = this.props
        return coordinate * (this.tileSize + 2 * gutter) + gutter
    }
}

export interface GridProps {
    /**
     * Amount of tiles
     */
    size: number
    /**
     * Space around each tile
     */
    gutter: number
    tiles: TileModel[]
}
