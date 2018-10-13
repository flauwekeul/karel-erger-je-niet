import * as React from 'react'
import './Die.css'

export const Die = ({ value }: DieProps) => {
    const style = {
        transform: `rotate(${Math.floor(Math.random() * 360)}deg)`
    }

    return (
        <div className={`Die value-${value}`} style={style}>
            <div className="dot top-left"/>
            <div className="dot top-right"/>
            <div className="dot center-left"/>
            <div className="dot center"/>
            <div className="dot center-right"/>
            <div className="dot bottom-left"/>
            <div className="dot bottom-right"/>
        </div>
    )
}

export interface DieProps {
    value: dieValue
}

export type dieValue = 1 | 2 | 3 | 4 | 5 | 6
