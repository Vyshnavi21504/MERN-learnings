// inheritance done in inheritians
function Person(name){
    this.name = name;
}
Person.prototype.greet = function(){
        console.log(`Hello, my name is ${this.name}`);
};

let vy = new Person("vyshnavi");
vy.greet();
//output: Hello, my name is vyshnavi