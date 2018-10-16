import * as React from 'react'
import { colorName, COLORS, FINISH_TILES, PATH_TILES, PAWNS, START_TILES } from 'src/constants'
import { Dialog } from 'src/Dialog/Dialog'
import { PawnModel } from 'src/Pawn/Pawn'
import { TileModel } from 'src/Tile/Tile'
import { Board } from '../Board/Board'
import { Die, dieValue } from '../Die/Die'
import { capitalize, randomNumber, translateColor } from '../utils'

class App extends React.PureComponent<{}, AppState> {
    constructor(props: {}) {
        super(props)
        this.state = {
            dialog: <Dialog>
                <h1>Karel erger je niet!</h1>
                <p>Klik op start hieronder om een willekeurige speler te kiezen die mag beginnen.</p>
                <button onClick={this.start}>Start</button>
            </Dialog>,
            die: randomNumber(1, 6) as dieValue,
            pawns: [...PAWNS],
            started: false,
            tiles: START_TILES.concat(PATH_TILES, FINISH_TILES),
        }
    }

    start = () => {
        const currentColor = COLORS[randomNumber(0, 3)]

        this.setState({
            currentColor,
            dialog: (
                <Dialog>
                    <p>{capitalize(translateColor(currentColor))} mag beginnen!</p>
                    <button onClick={this.closeDialog}>Ok</button>
                </Dialog>
            ),
            started: true
        })
    }

    closeDialog = () => {
        this.setState({ dialog: undefined })
    }

    rollDie = () => {
        this.setState({ die: randomNumber(1, 6) as dieValue })
    }

    render() {
        const { tiles, pawns, started, die, dialog } = this.state

        if (!started) {
            return dialog
        }

        return (
            <>
                <Board pawns={pawns} tiles={tiles} />
                <Die value={die} click={this.rollDie} />
                {dialog}
            </>
        )
    }
}

export interface AppState {
    currentColor?: colorName
    dialog?: JSX.Element
    die: dieValue
    pawns: PawnModel[]
    started: boolean
    tiles: TileModel[]
}

export default App
