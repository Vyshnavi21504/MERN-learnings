//GeneratorIterator: doesnt execute all code at once, it generates one when you click once and again after its clicked again
//yield keyword is used to pause and resume a generator function
function* numberGenerator(){
    yield 1;
    yield 2;
    yield 3;
}
let gen = numberGenerator();
let genTwo = numberGenerator();
console.log(gen.next().value)//output: 1
console.log(gen.next().value)//output: 2

console.log(genTwo.next().value)//output: 1
console.log(genTwo.next().value)//output: 2
console.log(genTwo.next().value)//output: 3
console.log(gen.next().value)//output: 3
console.log(gen.next().value)//output: undefined, as there are no more yields left