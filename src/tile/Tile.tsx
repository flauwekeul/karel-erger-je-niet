import classNames from 'classnames'
import * as React from 'react'
import { colorName } from 'src/constants'
import { Point } from 'src/point'
import './Tile.css'

export class Tile extends React.PureComponent<TileProps> {
    // todo: use styled components?
    render() {
        const { x, y, size, next, color, type } = this.props
        const spacing = type === 'base' || type === 'finish' ? 0.35 : 0.15
        const styleSize = (size - (size * spacing)) * 100
        const stylePosition = (coordinate: number) => (coordinate + size * spacing * 0.5) * 100

        const className = classNames('Tile', next, color)
        const style = {
            height: `${styleSize}%`,
            left: `${stylePosition(x)}%`,
            top: `${stylePosition(y)}%`,
            width: `${styleSize}%`,
        }

        return <div className={className} style={style} />
    }
}

export interface TileModel extends Point {
    type: tileType
    color?: colorName
    next?: direction
}

export interface TileProps extends TileModel {
    /**
     * Normalized width and height (between 0 and 1)
     */
    size: number
}

export type tileType = 'base' | 'finish' | 'path' | 'start'

export type direction = 'up' | 'right' | 'down' | 'left'
