import classNames from 'classnames';
import * as React from 'react';
import './Tile.css';

const Tile = ({ x, y, size, margin, offset, player }: TileProps) => {
    const position = (coordinate: number) => coordinate * (size + 2 * margin) + margin + offset
    // todo: use styled components?
    const style = {
        height: `${size}%`,
        left: `${position(x)}%`,
        top: `${position(y)}%`,
        width: `${size}%`,
    };
    const className = classNames('Tile', player)

    return <div className={className} style={style} />
};

export default Tile;

export interface TileProps {
    x: number;
    y: number;
    size: number;
    margin: number;
    offset: number;
    type: tileType;
    player?: playerName;
}

export type tileType = 'home' | 'neutral' | 'start' | 'base';

export type playerName = 'red' | 'blue' | 'green' | 'yellow';
