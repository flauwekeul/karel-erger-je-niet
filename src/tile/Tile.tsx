import * as React from 'react';
import './Tile.css';

const Tile = ({ x, y, size, margin, offset }: TileProps) => {
    const position = (coordinate: number) => coordinate * (size + 2 * margin) + margin + offset
    const style = {
        height: `${size}%`,
        left: `${position(x)}%`,
        top: `${position(y)}%`,
        width: `${size}%`,
    };

    return <div className="Tile" style={style} />
};

export default Tile;

export interface TileProps {
    x: number;
    y: number;
    size: number;
    margin: number;
    offset: number;
}
