import * as React from 'react'
import Board from './Board/Board'
import { Die, dieValue } from './Die/Die'

const randomDieValue = () => Math.floor(Math.random() * 6) + 1 as dieValue

const App = () => (
    <>
        <Board/>
        <Die value={randomDieValue()} />
    </>
)

export default App
