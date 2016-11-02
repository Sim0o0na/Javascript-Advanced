class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    static distance(firstPoint, secondPoint){
        return Math.sqrt(Math.pow((firstPoint.x - secondPoint.x), 2) + Math.pow((firstPoint.y - secondPoint.y), 2));
    }
}
let pointA = new Point(5, 5);
let pointB = new Point(9, 8);
console.log(Point.distance(pointA, pointB));