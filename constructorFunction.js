// function greet(name){
//     console.log("Hello, " + name + "!");
// }

function Person(name, age){
    this.name=name
    this.age=age
}
function car(make,model){
    this.make = make
    this.model=model
}

let myCar = new car("Toyota","Camry");
// console.log(myCar);
//output: car { make: 'Toyota', model: 'Camry' }
//new -keyword required to create an object

//function inside function
function Tea(type){
    this.type = type;
    this.describe = function(){
        return `this is a cup of ${this.type}`
    }
}

let lemonTea = new Tea("Lemon");
// console.log(lemonTea.describe());
//output: this is a cup of Lemon
function Animal(species){
    this.species = species;
}
Animal.prototype.sound = function(){
    return `${this.species} makes a sound`;
};
let dog = new Animal("Dog");
// console.log(dog.sound());
//output: Dog makes a sound