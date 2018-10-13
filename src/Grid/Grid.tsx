import * as React from 'react'
import { Tile, TileModel } from 'src/tile/Tile'
import './Grid.css'

export class Grid extends React.PureComponent<GridProps> {
    private tileSize: number

    constructor(props: GridProps) {
        super(props)
        this.tileSize = 1 / props.size
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
        return coordinate * this.tileSize
    }
}

export interface GridProps {
    /**
     * Amount of tiles
     */
    size: number
    tiles: TileModel[]
}
