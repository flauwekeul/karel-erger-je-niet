import * as React from 'react'
import { action } from 'src/App/App'
import { colorName } from 'src/constants'
import { capitalize, translateColor } from 'src/utils'
import './Help.css'

export class Help extends React.PureComponent<HelpProps> {
    render() {
        const { show, activeColor, currentAction } = this.props

        return (
            <div className={`Help ${show ? 'visible' : 'hidden'}`}>
                <span className={activeColor}>{capitalize(translateColor(activeColor))}</span> is aan de beurt.
                <br/>
                {currentAction === 'roll die' && 'Gooi de dobbelsteen door er op te klikken.'}
                {currentAction === 'move pawn' && 'Verplaats een pion door er op te klikken.'}
            </div>
        )
    }
}

export interface HelpProps {
    activeColor: colorName
    currentAction: action
    show: boolean
}
