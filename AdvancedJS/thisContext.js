//context gets lost when memory goes from one execution context to another.
const Person ={
    name: "Vyshu",
    greet(){
        console.log(`Hi, I am ${this.name}`);
    },
};
Person.greet();
//output: Hi, I am Vyshu

const greetFunction = Person.greet;
greetFunction(); //output: Hi, I am undefined
//context is lost here as greetFunction is called in global context

const boundGreet = Person.greet.bind({name : " John"});
boundGreet(); //output: Hi, I am John
//bind method binds the context permanently to the object passed as argument

//bind , call , apply methods