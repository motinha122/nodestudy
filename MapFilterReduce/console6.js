// Reduce o renegado

const users = [
    {firstname:"João",lastname:"Gomes",age:24},
    {firstname:"Lucas",lastname:"Silva e Silva",age:24},
    {firstname:"Ednaldo",lastname:"Pereira",age:43},
    {firstname:"UmDoisTres",lastname:"da SilvaQuatro",age:24},
    {firstname:"Simas",lastname:"Turbo",age:35},
];

const frequenciaIdade = users.reduce((acc,curr)=>{
    if(acc[curr.age]){
        acc[curr.age]++;
    }
    else{
        acc[curr.age] = 1;
    }
    return acc;
},{})

console.log(frequenciaIdade);