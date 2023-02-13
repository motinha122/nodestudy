// Reduce o desafio

const arraio = [8,5,9,0,7,5,4,2,1,4,6,7,9,10];

const somaDoArraio = arraio.reduce((acc,curr) => acc += curr ,0); 

console.log(somaDoArraio);

const maxArraio = arraio.reduce((max,curr) => {
    if(curr > max){
        max = curr;
    }
    return max;
},0);

console.log(maxArraio);