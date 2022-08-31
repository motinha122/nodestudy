// Map o começo

const arraio = [1,2,3,4,5];

function double(x){
    return x * 2;
}

function triple(x){
    return x * 3;
}

function binary(x){
    return x.toString(2);
}

const arraio2 = arraio.map(double);

const arraio3 = arraio.map(triple);

const arraio4 = arraio.map(binary);

console.log(arraio2);
console.log(arraio3);
console.log(arraio4);

