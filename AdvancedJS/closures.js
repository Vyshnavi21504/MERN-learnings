function outer(){
    let counter = 4;
    return function(){
        counter++;
        return counter;
    };
}
let inc = outer();
console.log(inc());
//output:5
//retains memory of counter variable even after outer function has executed = meaning of closure