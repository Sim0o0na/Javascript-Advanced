function getPersons() {
    class Person{
        constructor(fn = undefined, ln = undefined, age = undefined, email = undefined){
            [this.firstName, this.lastName,this.age, this.email] = [fn, ln,age,email]
        }
        toString(){
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }
    return [
        new Person('Maria', 'Petrova', 22, 'mp@yahoo.com'),
        new Person('SoftUni'),
        new Person('Stephan', 'Nikolov', 25),
        new Person('Peter', 'Kolev', 24, 'ptr@gmail.com')
    ];
}
console.log(getPersons().toString());