class Person{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
}

function extendClass(classToExtend) {
    classToExtend.prototype.species = 'Human';
    classToExtend.prototype.toSpeciesString = function () {
        return`I am a ${this.species}. ${this.toString()}`;
    };
}

