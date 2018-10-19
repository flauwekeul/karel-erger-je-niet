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
            tiles: START_TILES.concat(PATH_TILES, FINISH_TILES),
        }
    }

    start = () => {
        const currentColor = COLORS[randomNumber(0, 3)]

        this.setState({
            currentColor,
            dialog: (
                <Dialog>
                    <h1>{capitalize(translateColor(currentColor))} mag beginnen!</h1>
                    <p>Klik op de dobbelsteen om 'm te gooien.</p>
                    <button onClick={this.moveCurrentColorToStart}>Ok</button>
                </Dialog>
            ),
        })
    }

    rollDie = () => {
        this.setState({ die: randomNumber(1, 6) as dieValue })
    }

    moveCurrentColorToStart = () => {
        const { pawns, currentColor } = this.state
        const firstPawnOfCurrentColor = pawns.find(({ color }) => color === currentColor) as PawnModel

        this.movePawn(firstPawnOfCurrentColor, this.startTileOfCurrentColor())
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

        const currentTile = this.tileAt(point)
        if (!currentTile.next) {
            const { x, y } = currentTile
            console.error(`This tile has no next tile: [${x}, ${y}]`)
            return point
        }

        const relativeTile: { [key in direction]: Point } = {
            'down': new Point(0, 1),
            'left': new Point(-1, 0),
            'right': new Point(1, 0),
            'up': new Point(0, -1),
        }
        const nextPoint = Point.add(point, relativeTile[currentTile.next])

        if (Point.equals(nextPoint, this.startTileOfCurrentColor())) {
            const finishTileIndex = Math.min(3, steps - 1)
            return this.finishTilesOfCurrentColor()[finishTileIndex]
        }

        return this.pointAtStepsFrom(nextPoint, --steps)
    }

    startTileOfCurrentColor = () => {
        const { tiles, currentColor } = this.state
        return tiles.find(({ type, color }) => type === 'start' && color === currentColor) as TileModel
    }

    finishTilesOfCurrentColor = () => {
        const { tiles, currentColor } = this.state
        return tiles.filter(({ type, color }) => type === 'finish' && color === currentColor)
    }

    render() {
        const { tiles, pawns, die, dialog } = this.state

        return (
            <>
                <Board size={11} tiles={tiles} pawns={pawns} pawnClick={this.pawnClick} />
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
    tiles: TileModel[]
}

export default App
