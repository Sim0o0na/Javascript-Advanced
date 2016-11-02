(function () {
    let nextid = 0;
    class Extensible{
        constructor() {
            this.id = nextid;
            nextid++;
        }
        extend(source){
            for (let prop in source) {
                if (source.hasOwnProperty(prop)) {
                    if (typeof source[prop] == 'function') {
                        Object.getPrototypeOf(this)[prop] = source[prop]
                    } else {
                        this[prop] = source[prop]
                    }
                }
            }
        }
    }
    return Extensible;
})();

class Rat{
    constructor(n){
        this.name = n;
        this.rats = [];
    }
    unite(otherRat){
        if(otherRat.constructor.name == this.constructor.name) this.rats.push(otherRat);
    }
    getRats(){
        return this.rats;
    }
    toString(){
        let result = this.name+'\n';
        for (let rat of this.rats){
            result+='##'+ rat.name+'\n'
        }
        return result;
    }
}

let obj1 = new Extensible();
let obj2 = new Rat("pesho");
let obj3 = new Extensible();
let obj4 = new Extensible();
obj1.extend(obj2);
console.log(obj1);