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
        // todo: duplicate in Tile.tsx
        const styleSize = size - size * spacing
        const stylePosition = (coordinate: number) => coordinate * size + size * spacing * 0.5

        const className = classNames('Tile', color, {
            [next as direction]: type === 'path' || type === 'start'
        })
        const style = {
            height: `${styleSize * 100}%`,
            left: `${stylePosition(x) * 100}%`,
            top: `${stylePosition(y) * 100}%`,
            width: `${styleSize * 100}%`,
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
