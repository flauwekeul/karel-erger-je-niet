import classNames from 'classnames'
import * as React from 'react'
import { colorName } from 'src/Tile/Tile'
import './Pawn.css'

export class Pawn extends React.PureComponent<PawnProps> {
    render() {
        const { x, y, size, color } = this.props
        const spacing = 0.3
        const styleSize = (size - (size * spacing)) * 100
        const stylePosition = (coordinate: number) => (coordinate + size * spacing * 0.5) * 100

        const className = classNames('Pawn', color)
        const style = {
            height: `${styleSize}%`,
            left: `${stylePosition(x)}%`,
            top: `${stylePosition(y)}%`,
            width: `${styleSize}%`,
        }

        return <div className={className} style={style} />
    }
}

export interface PawnModel {
    x: number
    y: number
    color: colorName
}

export interface PawnProps extends PawnModel {
    size: number
}
