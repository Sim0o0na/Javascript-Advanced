// function extend(){
//     function Rabbit(name) {
//         this.name = name;
//     }
//     return Rabbit.prototype = obj;
// }

Object.prototype.extend = function (obj) {
    let newObj = {};
    function Rabbit(name) {
      this.name = name;
    }
    return Rabbit.prototype = obj;
};
var inputObj = { model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 };

let newObj = {};
newObj = newObj.extend(inputObj);
console.log(newObj);