class Circle{
    constructor(r){
        this.radius = Number(r);
    }
    get diameter(){ return this.radius*2}
    set diameter(diameter){
        this.radius = diameter/2;
    }
    get area(){
        return Math.PI * this.radius * this.radius;
    }
}

let cir1 = new Circle(5);
console.log(cir1.area);