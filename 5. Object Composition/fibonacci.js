function fibonacciCreate(input){
    let fibonacci = (()=> {
        let f0 = 0; let f1 = 1;
        return ()=>{
            let oldf0 = f0;
            let oldf1 = f1;
            f0 = oldf1;
            f1 = oldf0 + oldf1;
            return oldf1;
        }
    })();
    let fibonacciNums = [];
    let n = Number(input);
    for(let i=0; i<n; i++){
        fibonacciNums.push(fibonacci())
    }
    return fibonacciNums;
}
function processCommands(input) {
    let processor = (()=>{
        let list = [];
        function add(text) {
            list.push(text);
            console.log(list)
        }
        function remove(text) {
            let index = list.indexOf(text);
            if (index > -1) {
                list.splice(index, 1);
            }
        }
        function print() {
            console.log(''+list)
        }
        return {add, remove, print}
        }
    )();
    for (let cmd of input){
        cmd = cmd.split(' '); let command = cmd[0], text = cmd[1];
        processor[command](text);

    }
}
function cars(input) {
    let cars = new Map();
    let carCreator = (()=>{
        function create(name) {
            cars.set(name, {});
        }
        function createWithInheritance(newCar, parent) {
            cars.set(newCar, Object.create(cars.get(parent)))
        }
        function set(car, key, value) {
            cars.get(car)[key] = value;
        }
        function print(objName) {
            let obj = cars.get(objName);
            let objKeys = Object.keys(cars.get(objName))
                .map(k => `${k}:${cars.get(objName)[k]}`);

            while (obj = Object.getPrototypeOf(obj)) {
                let o = Object.keys(obj).map(k => `${k}:${obj[k]}`);
                objKeys = objKeys.concat(o)
            }
            console.log(objKeys.join(', '));
        }
        return {create, createWithInheritance, set, print}
    })();
    for (let cmd of input){
        cmd = cmd.split(' '); let command = cmd[0];
        if (command == 'create'){
            let name = cmd[1];
            carCreator[command](name);
        }
        if (command == 'create' && cmd.length>3){
            let name = cmd[1];
            let parent = cmd[3];
            command = 'createWithInheritance';
            carCreator[command](name, parent);
        }
        if (command == 'set'){
            let car = cmd[1]; let key = cmd[2]; let value = cmd[3];
            command = 'set';
            carCreator[command](car, key,value);
        }
        if (command == 'print'){
            let car = cmd[1];
            command = 'print'
            carCreator[command](car);
        }
    }
}
function sum() {
    
}
cars(['create c1', 'create c2 inherit c1', 'set c1 color red', 'set c2 model new', 'print c1', 'print c2']);