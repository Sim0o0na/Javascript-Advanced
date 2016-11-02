function extensibleObject() {
    let obj = {};
    obj.extend = function (template) {
        for (let prop in template) {
            if(typeof template[prop] == 'function'){
                Object.getPrototypeOf(obj)[prop] = template[prop];
            }else{
                obj[prop] = template[prop];
            }
        }
    };
    return obj
}
let source = {
    name: 'simona',
    age: 19
};
let obj = {label: 'simonka', years: 19};
console.log(extensibleObj());
