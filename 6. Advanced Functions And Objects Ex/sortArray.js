function solve(input, func) {
    let sorter = (() => {
        function asc(array) {
            return array.sort(function(a,b) {
                return a-b;
            })
        }
        function desc(array) {
            return array.sort(function(a,b) {
                return b-a;
            })
        }
        return {asc, desc};
    })();
    return sorter[func](input);
}
function argumentInfo() {
    let args = {};
    for (let i = 0; i < arguments.length; i++) {
        let type = typeof arguments[i];
        if (!args[type]) {
            args[type] = 1;
        } else {
            args[type] += 1;
        }
        console.log(`${type}: ${arguments[i]}`)
    }
    let sortedKeys = Object.keys(args).sort(function (a, b) {
        return args[b] - args[a];
    });
    for (let key of sortedKeys) {
        console.log(key + ' = ' + args[key]);
    }
}
function functionalSum(){
    let add = (function () {
        let total = 0;
        return function sum(a) {
            total += a;
            sum.toString = () => total;
            return sum;
        }
    })();
}
function personalBMI(name, age, weight, height) {
    let person = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: undefined,
        status: undefined};

    function calcBMI(weight, height){
        let bmi = Number(weight)/(Number(height/100) * Number(height/100));
        return Math.round(bmi);
    }
    person.BMI = calcBMI(weight,height);
    function status(bmi){
        if (bmi<18.5) person.status = 'underweight';
        if (bmi>=18.5 && bmi<25) person.status = 'normal';
        if (bmi>=25 && bmi<30) person.status = 'overweight';
        if (bmi>=30) {person.status = 'obese'; person.recommendation = 'admission required';}
    }
    status(Number(person.BMI));
    return person;
}
// (function () {
//     let solution = (() => {
//         function add(vector1, vector2) {
//             let output = []; output.push(vector1[0] + vector2[0]); output.push(vector1[1] + vector2[1]);
//             return output;
//         }
//         function multiply(vect, multiplier) {
//             let output = []; output.push(vect[0]*multiplier); output.push(vect[1]*multiplier);
//             return output;
//         }
//         function length(vect) {
//             let output = Math.sqrt(((vect[0]*vect[0]) + (vect[1]*vect[1])));
//             return output;
//         }
//         function dot(vect1, vect2) {
//             let output = (vect1[0]*vect2[0]) + (vect1[1]*vect2[1]);
//             return output;
//         }
//         function cross(vect1, vect2) {
//             let output = (vect1[0]*vect2[1]) - (vect2[0]*vect1[1]);
//             return output;
//         }
//         return {add, multiply, length, dot, cross}
//     })();
//     return solution
// })();
//
//
//
//
// solution.add([1, 1], [1, 0]);
// solution.multiply([3.5, -2], 2);
// solution.length([3, -4]);
// solution.dot([4, 0], [0, -1]);
// solution.cross([3, 7], [1, 0]);

function solve(input) {
    let ingredients = {fat: 0, carbohydrate: 0, protein: 0, flavour: 0};
    let products ={
        apple: {carbohydrate: 1, flavour: 2},
        coke: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, flavour: 3, fat:7},
        omelet: {protein: 5, fat:1, flavour: 1},
        cheverme: {protein: 10, carbohydrate:10, fat:10, flavour: 10},
    }
    function prepare(quantity, product) {
        for (let key of Object.keys(products[product])){
            let totalQuantity = products[product][key]*quantity;
            if(ingredients[key]<totalQuantity){
                return`Error: not enough ${key} in stock`;
            }
        }
        for (let element of Object.keys(products[product])) {
            ingredients[element] -= products[product][element] * quantity;
            if(ingredients[element]<0){
                ingredients[element]=0
            }
        }
        return 'Success';
    }
    for (let command of input){
        command = command.split(' ');
        if (command[0]=='restock'){ingredients[command[1]] += Number(command[2]);}
        if (command[0]=='prepare'){
            let quantity = Number(command[2]);
            let product = command[1];
           prepare(quantity, product);
        }
        if (command[0]=='report'){
            retun `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`
        }
    }
}
solve(["prepare cheverme 1","restock protein 10","prepare cheverme 1","restock carbohydrate 10","prepare cheverme 1","restock fat 10","prepare cheverme 1","restock flavour 10","prepare cheverme 1","report"]);

