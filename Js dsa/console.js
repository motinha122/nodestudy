function cubic(n) {
    let counter = 0;
    for (let i = 0 ; i < n ; i++){
        for (let j = 0 ; j < n ;j++){
            for (let k = 0 ; k < n ;k++){
                counter++;
            }
        }
    }
    return counter;
}
console.log(cubic(4));

function quadratic(n) {
    let counter = 0;
    for (let i = 0 ; i < n ; i++){
        for (let j = 0 ; j < n ;j++){
            counter++;
        }
    }
    return counter;
}

console.log(quadratic(4));

