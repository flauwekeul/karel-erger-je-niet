import classNames from 'classnames'
import * as React from 'react'
import './Tile.css'

export class Tile extends React.PureComponent<TileProps> {
    static colors: colors = ['red', 'blue', 'green', 'yellow']

    offset = 4
    margin = 1
    size = ((100 - 2 * this.offset) / 11) - (2 * this.margin)
    color: colorName

    // todo: use styled components?
    render() {
        const { x, y, next, color } = this.props
        const className = classNames('Tile', next, color)
        const style = {
            height: `${this.size}%`,
            left: `${this.position(x)}%`,
            top: `${this.position(y)}%`,
            width: `${this.size}%`,
        }

        return <div className={className} style={style} />
    }

    private position(coordinate: number) {
        return coordinate * (this.size + 2 * this.margin) + this.margin + this.offset
    }
}

export interface TileProps {
    index: number
    x: number
    y: number
    next?: direction
    color?: colorName
}

export type tileType = 'home' | 'neutral' | 'start' | 'base'

export type colorName = 'red' | 'blue' | 'green' | 'yellow'

export type colors = [colorName, colorName, colorName, colorName]

export type direction = 'up' | 'right' | 'down' | 'left'
