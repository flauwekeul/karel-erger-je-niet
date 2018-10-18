import classNames from 'classnames'
import * as React from 'react'
import { colorName } from 'src/constants'
import { Point } from 'src/point'
import './Pawn.css'

export class Pawn extends React.PureComponent<PawnProps> {
    render() {
        const { pawn, size } = this.props
        const spacing = 0.3
        // todo: duplicate in Tile.tsx
        const styleSize = (size - (size * spacing)) * 100
        const stylePosition = (coordinate: number) => (coordinate * size + size * spacing * 0.5) * 100

        const className = classNames('Pawn', pawn.color)
        const style = {
            height: `${styleSize}%`,
            left: `${stylePosition(pawn.x)}%`,
            top: `${stylePosition(pawn.y)}%`,
            width: `${styleSize}%`,
        }

        return <div className={className} style={style} onClick={this.handleClick} />
    }

    handleClick = () => {
        this.props.click(this.props.pawn)
    }
}

export interface PawnModel extends Point {
    color: colorName
}

export interface PawnProps {
    pawn: PawnModel
    size: number
    click(pawn: PawnModel): void
}
