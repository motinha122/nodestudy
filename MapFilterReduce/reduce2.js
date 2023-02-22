// Reduce o renegado

const users = [
    {firstname:"João",lastname:"Gomes",age:24},
    {firstname:"Lucas",lastname:"Silva e Silva",age:24},
    {firstname:"Ednaldo",lastname:"Pereira",age:43},
    {firstname:"UmDoisTres",lastname:"da SilvaQuatro",age:24},
    {firstname:"Simas",lastname:"Turbo",age:35},
    {firstname:"Edoederson",lastname:"Matos",age:35},
];

console.time('If e Else');
const frequenciaIdade = users.reduce((acc,curr)=>{
    if(acc[curr.age]){
        acc[curr.age]++;
    }
    else{
        acc[curr.age] = 1;
    }
    return acc;
}, {})
console.timeEnd('If e Else');
console.log(frequenciaIdade);

console.time('Ternário');
const frequenciaIdade2 = users.reduce((freq, user) => {
    freq[user.age] ? freq[user.age]++ : freq[user.age] = 1;
    return freq;
}, {})

console.timeEnd('Ternário');
console.log(frequenciaIdade2);
