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

class Fake{
    constructor(n){
        this.name = n;
        this.rats = [];
    }
}
let rat1 = new Rat("pesho");
let rat2 = new Rat("gosho");
let rat3 = new Fake("kiro");
let rat4 = new Rat("kiro");
rat1.unite(rat2);
rat1.unite(rat3);
rat1.unite(rat4);
console.log(rat1.toString());
