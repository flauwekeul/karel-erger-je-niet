import classNames from 'classnames'
import * as React from 'react'
import './Tile.css'

export class Tile extends React.PureComponent<TileProps> {
    static colors: colors = ['red', 'blue', 'green', 'yellow']

    color: colorName

    // todo: use styled components?
    render() {
        const { x, y, size, next, color } = this.props
        const className = classNames('Tile', next, color)
        const style = {
            height: `${size}%`,
            left: `${x}%`,
            top: `${y}%`,
            width: `${size}%`,
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
    size: number
}

export type tileType = 'start' | 'finish' | 'path' | 'spawn'

export type colorName = 'red' | 'blue' | 'green' | 'yellow'

export type colors = [colorName, colorName, colorName, colorName]

export type direction = 'up' | 'right' | 'down' | 'left'
