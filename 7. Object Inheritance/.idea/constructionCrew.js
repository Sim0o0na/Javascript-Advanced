function solve(obj) {
    if(obj.handsShaking == true){
        obj.bloodAlcoholLevel += Number(obj.weight) * Number(obj.experience) * 0.1;
        obj.handsShaking = false;
    }
    return obj;
}
let worker = { weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: false }


console.log(solve(worker));