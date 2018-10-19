import classNames from 'classnames'
import * as React from 'react'
import { randomNumber } from 'src/utils'
import './Die.css'

export class Die extends React.PureComponent<DieProps, DieState> {
    constructor(props: DieProps) {
        super(props)
        this.state = { style: this.randomStyle() }
    }

    handleClick = () => {
        const { click, disabled } = this.props

        if (disabled) {
            return
        }

        this.setState({ style: this.randomStyle() })
        click()
    }

    render() {
        const { value, disabled } = this.props
        const className = classNames('Die', `value-${value}`, { disabled })

        return (
            <div className={className} style={this.state.style} onClick={this.handleClick}>
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

    private randomStyle() {
        return {
            left: `${randomNumber(63, 90)}%`,
            top: `${randomNumber(10, 85)}%`,
            transform: `rotate(${randomNumber(0, 360)}deg)`
        }
    }
}

export interface DieProps {
    disabled: boolean
    value: dieValue
    click(): void
}

export interface DieState {
    style: {
        left: string
        top: string
        transform: string
    }
}

export type dieValue = 1 | 2 | 3 | 4 | 5 | 6
