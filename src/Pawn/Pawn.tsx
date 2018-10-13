import * as React from 'react'
import './Pawn.css'

export class Pawn extends React.PureComponent<PawnProps> {
    render() {
        const { x, y, size } = this.props
        const spacing = 0.35
        const styleSize = (size - (size * spacing)) * 100
        const stylePosition = (coordinate: number) => (coordinate + size * spacing * 0.5) * 100

        const style = {
            height: `${styleSize}%`,
            left: `${stylePosition(x)}%`,
            top: `${stylePosition(y)}%`,
            width: `${styleSize}%`,
        }

        return <div className="Pawn" style={style} />
    }
}

export interface PawnModel {
    x: number
    y: number
}

export interface PawnProps extends PawnModel {
    size: number
}
