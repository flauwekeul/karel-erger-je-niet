import classNames from 'classnames'
import * as React from 'react'
import { colorName } from 'src/constants'
import { Point } from 'src/point'
import './Pawn.css'

export class Pawn extends React.PureComponent<PawnProps> {
    render() {
        const { pawn, size, disabled } = this.props
        const spacing = 0.3
        // todo: duplicate in Tile.tsx
        const styleSize = size - size * spacing
        const stylePosition = (coordinate: number) => coordinate * size + size * spacing * 0.5

        const className = classNames('Pawn', pawn.color, { disabled })
        const style = {
            height: `${styleSize * 100}%`,
            left: `${stylePosition(pawn.x) * 100}%`,
            top: `${stylePosition(pawn.y) * 100}%`,
            width: `${styleSize * 100}%`,
        }

        return <div className={className} style={style} onClick={this.handleClick} />
    }

    handleClick = () => {
        const { click, disabled } = this.props

        if (disabled) {
            return
        }

        click(this.props.pawn)
    }
}

export interface PawnModel extends Point {
    color: colorName
}

export interface PawnProps {
    disabled: boolean
    pawn: PawnModel
    size: number
    click(pawn: PawnModel): void
}
