import classNames from 'classnames'
import * as React from 'react'
import './Tile.css'

export class Tile extends React.PureComponent<TileProps> {
    static playerNames: playerNames = ['red', 'blue', 'green', 'yellow']

    offset = 4
    margin = 1
    size = ((100 - 2 * this.offset) / 11) - (2 * this.margin)

    // todo: use styled components?
    get styles() {
        return {
            height: `${this.size}%`,
            left: `${this.position(this.props.x)}%`,
            top: `${this.position(this.props.y)}%`,
            width: `${this.size}%`,
        }
    }

    get classNames() {
        const eleventh = this.props.index / 10
        return classNames('Tile', this.props.next, {
            [Tile.playerNames[eleventh]]: Number.isInteger(eleventh)
        })
    }

    render() {
        return <div className={this.classNames} style={this.styles} />
    }

    private position(coordinate: number) {
        return coordinate * (this.size + 2 * this.margin) + this.margin + this.offset
    }
}

export interface TileProps {
    index: number
    x: number
    y: number
    next: direction
}

export type tileType = 'home' | 'neutral' | 'start' | 'base'

export type playerNames = ['red', 'blue', 'green', 'yellow']

export type direction = 'up' | 'right' | 'down' | 'left'
