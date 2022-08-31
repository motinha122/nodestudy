//stateful function

let number = 2;

function square(){
    return number * number;
}

number = square()

//stateless function 

const square2 = n => n * n;

console.log(square2(2));
console.log(number);