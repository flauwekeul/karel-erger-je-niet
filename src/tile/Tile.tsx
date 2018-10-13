import classNames from 'classnames'
import * as React from 'react'
import './Tile.css'

export class Tile extends React.PureComponent<TileProps> {
    static colors: colors = ['red', 'blue', 'green', 'yellow']

    // todo: use styled components?
    render() {
        const { x, y, size, next, color, type } = this.props
        const spacing = type === 'start' || type === 'finish' ? 0.35 : 0.15
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

export interface TileModel {
    x: number
    y: number
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

export type tileType = 'start' | 'finish' | 'path' | 'spawn'

export type colorName = 'red' | 'blue' | 'green' | 'yellow'

export type colors = [colorName, colorName, colorName, colorName]

export type direction = 'up' | 'right' | 'down' | 'left'
