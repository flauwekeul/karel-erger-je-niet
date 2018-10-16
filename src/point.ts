export class Point {
    static equals(point1: Point, point2: Point) {
        return point1.x === point2.x && point1.y === point2.y
    }

    constructor(public x: number, public y: number) { }
}
