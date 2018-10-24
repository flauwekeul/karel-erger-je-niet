import * as React from 'react'
import { BASE_TILES, colorName, COLORS, FINISH_TILES, PATH_TILES, PAWNS } from 'src/constants'
import { Dialog } from 'src/Dialog/Dialog'
import { Help } from 'src/Help/Help'
import { PawnModel } from 'src/Pawn/Pawn'
import { Point } from 'src/point'
import { direction, TileModel } from 'src/Tile/Tile'
import { Board } from '../Board/Board'
import { Die, dieValue } from '../Die/Die'
import { capitalize, randomNumber, translateColor } from '../utils'

class App extends React.PureComponent<{}, AppState> {
    private helpTimeout: NodeJS.Timeout

    constructor(props: {}) {
        super(props)
        // todo: don't use state, but just class properties?
        // https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class
        this.state = {
            activeColor: COLORS[randomNumber(0, 3)],
            currentAction: 'roll die',
            dialog: (
                <Dialog>
                    <h1>Karel erger je niet!</h1>
                    <p>Klik op start hieronder om een willekeurige speler te kiezen die mag beginnen.</p>
                    <button onClick={this.start}>Start</button>
                </Dialog>
            ),
            die: randomNumber(1, 6) as dieValue,
            pawns: [...PAWNS],
            showHelp: false,
            tiles: BASE_TILES.concat(PATH_TILES, FINISH_TILES),
        }
    }

    start = () => {
        const ok = () => {
            this.moveActiveColorToStart()
            this.closeDialog()
            this.startHelpTimer()
        }

        this.setState({
            dialog: (
                <Dialog>
                    <h1>{capitalize(translateColor(this.state.activeColor))} mag beginnen!</h1>
                    <p>Klik op de dobbelsteen om 'm te gooien.</p>
                    <button onClick={ok}>Ok</button>
                </Dialog>
            ),
        })
    }

    rollDie = () => {
        this.setState({
            currentAction: 'move pawn',
            die: randomNumber(1, 6) as dieValue,
            showHelp: false
        }, this.startHelpTimer)
    }

    moveActiveColorToStart = () => {
        const { pawns, activeColor } = this.state
        const firstPawnOfActiveColor = pawns.find(({ color }) => color === activeColor) as PawnModel

        this.movePawn(firstPawnOfActiveColor, this.startTileOfActiveColor())
    }

    closeDialog = () => {
        this.setState({ dialog: undefined })
    }

    movePawn = (from: Point, to: Point) => {
        const { pawns } = this.state
        const pawnIndex = pawns.findIndex(pawn => Point.equals(pawn, from))
        const targetPawn = pawns[pawnIndex]

        this.setState({
            pawns: [
                ...pawns.slice(0, pawnIndex),
                { ...targetPawn, ...to },
                ...pawns.slice(pawnIndex + 1),
            ]
        })
    }

    pawnClick = (pawn: PawnModel) => {
        const isPawnOnBase = this.tileAt(pawn).type === 'base'
        const newPosition = isPawnOnBase ? this.startTileOfActiveColor() : this.pointAtStepsFrom(pawn, this.state.die)

        this.movePawn(pawn, newPosition)
        this.setState({
            currentAction: 'roll die',
            showHelp: false
        }, this.startHelpTimer)

        if (!isPawnOnBase) {
            // wait for pawn to finish animating to its next position and an additional second
            setTimeout(this.activateNextColor, 2000)
        }
    }

    activateNextColor = () => {
        this.setState({
            activeColor: this.nextColor(),
        }, () => {
            if (this.activePawns().length === 0) {
                this.moveActiveColorToStart()
            }
        })
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

        if (Point.equals(nextPoint, this.startTileOfActiveColor())) {
            const finishTileIndex = Math.min(3, steps - 1)
            return this.finishTilesOfActiveColor()[finishTileIndex]
        }

        return this.pointAtStepsFrom(nextPoint, --steps)
    }

    startTileOfActiveColor = () => {
        const { tiles, activeColor } = this.state
        return tiles.find(({ type, color }) => type === 'start' && color === activeColor) as TileModel
    }

    baseTilesOfActiveColor = () => {
        const { tiles, activeColor } = this.state
        return tiles.filter(({ type, color }) => type === 'base' && color === activeColor)
    }

    finishTilesOfActiveColor = () => {
        const { tiles, activeColor } = this.state
        return tiles.filter(({ type, color }) => type === 'finish' && color === activeColor)
    }

    nextColor = () => {
        const { activeColor } = this.state
        const nextColorIndex = COLORS.findIndex(color => color === activeColor) + 1
        return COLORS[nextColorIndex > 3 ? 0 : nextColorIndex]
    }

    activePawns = () => {
        const { pawns, activeColor, die } = this.state
        const pawnsOfActiveColorOnPathTiles = pawns.filter(pawn => (
            pawn.color === activeColor && PATH_TILES.some(tile => Point.equals(tile, pawn))
        ))

        if (pawnsOfActiveColorOnPathTiles.length === 0) {
            return pawnsOfActiveColorOnPathTiles
        }

        if (die === 6 && !pawns.some(pawn => pawn.color === activeColor && Point.equals(pawn, this.startTileOfActiveColor()))) {
            return pawns.filter(pawn => (
                this.baseTilesOfActiveColor().some(tile => Point.equals(tile, pawn))
            ))
        }

        return pawnsOfActiveColorOnPathTiles
    }

    startHelpTimer = () => {
        clearTimeout(this.helpTimeout)
        this.helpTimeout = setTimeout(() => {
            this.setState({ showHelp: true })
        }, 5000)
    }

    render() {
        const { tiles, pawns, die, dialog, currentAction, activeColor, showHelp } = this.state

        return (
            <>
                <Help show={showHelp} activeColor={activeColor} currentAction={currentAction} />
                <Board
                    size={11}
                    tiles={tiles}
                    pawns={pawns}
                    pawnClick={this.pawnClick}
                    disabled={currentAction !== 'move pawn'}
                    enabledPawns={this.activePawns()} />
                <Die
                    value={die}
                    click={this.rollDie}
                    disabled={currentAction !== 'roll die'} />
                {dialog}
            </>
        )
    }
}

export interface AppState {
    currentAction: action
    activeColor: colorName
    dialog?: JSX.Element
    die: dieValue
    pawns: PawnModel[]
    showHelp: boolean
    tiles: TileModel[]
}

export type action = 'roll die' | 'move pawn'

export default App
