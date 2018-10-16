import * as React from 'react'
import { randomNumber } from 'src/utils'
import './Die.css'

export class Die extends React.PureComponent<DieProps> {
    render() {
        const { value, click } = this.props
        const style = {
            left: `${randomNumber(63, 90)}%`,
            top: `${randomNumber(10, 85)}%`,
            transform: `rotate(${randomNumber(0, 360)}deg)`
        }

        return (
            <div className={`Die value-${value}`} style={style} onClick={click}>
                <div className="dot top-left" />
                <div className="dot top-right" />
                <div className="dot center-left" />
                <div className="dot center" />
                <div className="dot center-right" />
                <div className="dot bottom-left" />
                <div className="dot bottom-right" />
            </div>
        )
    }
}

export interface DieProps {
    value: dieValue
    click(): void
}

export type dieValue = 1 | 2 | 3 | 4 | 5 | 6
