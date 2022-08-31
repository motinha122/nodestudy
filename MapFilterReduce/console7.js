// Filter,Map e Reduce os vingadores

const users = [
    {firstname:"João",lastname:"Gomes",age:24},
    {firstname:"Lucas",lastname:"Silva e Silva",age:24},
    {firstname:"Ednaldo",lastname:"Pereira",age:43},
    {firstname:"UmDoisTres",lastname:"da SilvaQuatro",age:24},
    {firstname:"Simas",lastname:"Turbo",age:35},
];

const maioresTrinta = users.filter((x)=>x.age>=30).map((x)=>x.firstname);

console.log(maioresTrinta);

const menoresQuarenta = users.reduce((acc,curr)=>{
    if(curr.age <= 40){
        acc.push(curr.firstname);
    }
    return acc
},[])

console.log(menoresQuarenta);