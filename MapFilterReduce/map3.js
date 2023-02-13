// Map o retorno 

const users = [
    {firstname:"João",lastname:"Gomes",age:24},
    {firstname:"Ednaldo",lastname:"Pereira",age:43},
    {firstname:"UmDoisTres",lastname:"da SilvaQuatro",age:28},
    {firstname:"Simas",lastname:"Turbo",age:35},
];

const names = users.map((x)=>x.firstname+" "+x.lastname);

console.log(names);