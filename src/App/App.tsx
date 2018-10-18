import * as React from 'react'
import { colorName, COLORS, FINISH_TILES, PATH_TILES, PAWNS, START_TILES } from 'src/constants'
import { Dialog } from 'src/Dialog/Dialog'
import { PawnModel } from 'src/Pawn/Pawn'
import { Point } from 'src/point'
import { direction, TileModel } from 'src/Tile/Tile'
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
                    <button onClick={this.moveCurrentColorToStart}>Ok</button>
                </Dialog>
            ),
            started: true
        })
    }

    rollDie = () => {
        this.setState({ die: randomNumber(1, 6) as dieValue })
    }

    moveCurrentColorToStart = () => {
        const { tiles, pawns, currentColor } = this.state
        const firstPawnOfCurrentColor = pawns.find(({ color }) => color === currentColor) as PawnModel
        const startTileOfCurrentColor = tiles.find(({ type, color }) => type === 'start' && color === currentColor) as TileModel

        this.movePawn(firstPawnOfCurrentColor, startTileOfCurrentColor)
        this.closeDialog()
    }

    closeDialog = () => {
        this.setState({ dialog: undefined })
    }

    movePawn = (from: Point, to: Point) => {
        const { pawns } = this.state
        const pawnIndex = pawns.findIndex(pawn => Point.equals(pawn, from))
        const targetPawn = pawns[pawnIndex]

        this.setState({ pawns: [
            ...pawns.slice(0, pawnIndex),
            { ...targetPawn, ...to },
            ...pawns.slice(pawnIndex + 1),
        ] })
    }

    pawnClick = (pawn: PawnModel) => {
        this.movePawn(pawn, this.pointAtStepsFrom(pawn, this.state.die))
    }

    tileAt = (point: Point) => {
        return this.state.tiles.find(tile => Point.equals(tile, point)) as TileModel
    }

    pointAtStepsFrom = (point: Point, steps: number): Point | never => {
        if (steps === 0) {
            return point
        }

        const tile = this.tileAt(point)
        if (!tile.next) {
            throw new Error(`Not a path tile: ${tile}`)
        }

        const relativeTile: { [key in direction]: Point } = {
            'down': new Point(0, 1),
            'left': new Point(-1, 0),
            'right': new Point(1, 0),
            'up': new Point(0, -1),
        }
        return this.pointAtStepsFrom(Point.add(point, relativeTile[tile.next]), --steps)
    }

    render() {
        const { tiles, pawns, started, die, dialog } = this.state

        if (!started) {
            return dialog
        }

        return (
            <>
                <Board pawns={pawns} tiles={tiles} pawnClick={this.pawnClick} />
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
