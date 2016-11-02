function compareRectangles(input) {
    function createRectangle(width, height){
        let rect = {
            width: width,
            height: height,
            area: () => rect.width * rect.height,
            compareTo: function(other) {
                let result = other.area() - rect.area();
                return result || (other.width - rect.width);
            }
        }
        return rect;
    }
    let rectangles = [];
    for (let [width, height] of input){
        let rect = createRectangle(width, height);
        rectangles.push(rect);
    }
    rectangles.sort((a,b)=> a.compareTo(b));
    return rectangles;
}
console.log(compareRectangles([[10,5],[5,12]]));
