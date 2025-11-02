//oop:object-oriented programming
//encapsulation,inheritance,polymorphism,abstraction
let car = {
    make: "Toyota",
    model: "Camry",
    year:2020,
    start:function(){
        return `${this.make} car got started in ${this.year}`;
    },
};
console.log(car.start());
//output: Toyota car got started in 2020

//prototype chain
function Animal(type){
    this.type = type
}
Animal.prototype.speak = function(){
    return `${this.type} makes a sound`
}
console.log(new Animal("Dog").speak());
//output: Dog makes a sound

//inheritance
class Vehicle{
        constructor(make, model){
            this.make = make
            this.model = model;
        }
        start(){
            return `${this.model} is a model from ${this.make}`;
        }
}
class Car extends Vehicle{
    drive(){
        return `${this.make} : This is an inheritance example`;
    }
}
let myCar = new Car("Toyota", "Corolla");
console.log(myCar.start());
console.log(myCar.drive());
//output: Corolla is a model from Toyota
//for inheritiance use keyword "extends"

//Encapsulation
class BankAccount{
    #balance = 0;

    deposit(amount){
        this.#balance += amount
        return this.#balance
    }
    getBalance(){
        return `${this.balance}`;
    }
}
let account = new BankAccount();
console.log(account.getBalance());

//abstraction
class CoffeMachine{
    start(){
        return `starting the machine`;
    }
    brewCoffee(){
        return `Brewing Coffee`;
    }
}
let myMachine = new CoffeMachine();
console.log(myMachine.start());
console.log(myMachine.brewCoffee());
//output: starting the machine
//output: Brewing Coffee

//polymorphism
class Bird{
    fly(){
        return `Flying..`;
    }
}
class Penguin extends Bird{
    fly(){
        return `Penguins can't fly`;
    }
}
let bird = new Bird();
console.log(bird.fly());
let pen = new Penguin();
console.log(pen.fly());
//output: Flying..
//output: Penguins can't fly

//static method-special method that can be called only by the class itself
class Calculator{
    static add(a,b){
        return a + b;
    }
}
console.log(Calculator.add(2,3));
//output: 5


//getters and setters
class Employee{
    #salary;
    consuctor(name,salary){
        this.name = name
        this.#salary = salary
    }
    get salary(){
        return `You are not allowed to see salary`;
    }
    set salary(value){
        if(value < 0){
            console.error("Invalid Salary");
        }else{
            this.#salary = value;
        }
    }
}
let emp = new Employee("Alice" , -3000);
console.log(emp.salary);
emp.salary = 5000;
console.log(emp.salary);
//output: You are not allowed to see salary
//output: You are not allowed to see salary 