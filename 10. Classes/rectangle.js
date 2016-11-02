class Rectangle{
    constructor(w,h,c){
        this.width = w;
        this.height = h;
        this.color = c;
    }
    calcArea(){
        return this.width*this.height;
    }
}

let rect1 = new Rectangle(4,5, 'black');
console.log(rect1)
console.log(rect1.calcArea());