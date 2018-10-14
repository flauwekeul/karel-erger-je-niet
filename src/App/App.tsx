import * as React from 'react'
import Board from '../Board/Board'
import { Die, dieValue } from '../Die/Die'
import { randomNumber } from '../utils'

class App extends React.PureComponent<{}, AppState> {
    constructor(props: {}) {
        super(props)
        this.state = {
            value: randomNumber(1, 6) as dieValue
        }
    }

    rollDie = () => {
        this.setState({ value: randomNumber(1, 6) as dieValue })
    }

    render() {
        const { value } = this.state
        return (
            <>
                <Board/>
                <Die value={value} click={this.rollDie} />
            </>
        )
    }
}

export interface AppState {
    value: dieValue
}

export default App
