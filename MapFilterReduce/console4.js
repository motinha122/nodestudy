// Reduce o desafio

const arraio = [0,1,2,3,4,5,6,7,8];

const somaDoArraio = arraio.reduce((acc,curr) => acc += curr ,0); 

console.log(somaDoArraio);

const maxArraio = arraio.reduce((max,curr) => {
    if(curr > max){
        max = curr;
    }
    return max;
},0);

console.log(maxArraio);