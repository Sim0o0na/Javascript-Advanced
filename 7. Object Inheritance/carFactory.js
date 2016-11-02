function solve(inputObj) {
    let smallEngine = { power: 90, volume: 1800 };
    let normalEngine = { power: 120, volume: 2400 };
    let monsterEngine = { power: 200, volume: 3500 };
    let newCar = {
        model: undefined,
        engine: {},
        carriage: {},
        wheels: []
    };
    newCar.model = inputObj.model;

        if(inputObj.power <= normalEngine.power && inputObj.power > smallEngine.power){
            newCar.engine = {
                power: normalEngine.power,
                volume: normalEngine.volume
            };}
        if(inputObj.power <= monsterEngine.power && inputObj.power > normalEngine.power){
            newCar.engine = {
                power: monsterEngine.power,
                volume: monsterEngine.volume
            };}
        if(inputObj.power <= smallEngine.power){
            newCar.engine = {
                power: smallEngine.power,
                volume: smallEngine.volume
            };}
    newCar.carriage = {
        type: inputObj.carriage,
        color: inputObj.color
    };
    if(inputObj.wheelsize%2==0){
        for (let i =0; i<4; i++){
            newCar.wheels.push(inputObj.wheelsize-1);
        }
    }else{
        for (let i =0; i<4; i++){
            newCar.wheels.push(inputObj.wheelsize);
        }
    }
    return newCar;
}
let inputObj = { model: 'VW Golf II',
    power: 110,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 };

console.log(solve(inputObj));