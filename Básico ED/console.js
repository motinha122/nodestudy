const pilotos = ['Senna','Prost','Schumacher','Hamilton'];

pilotos.push('Alonso');
pilotos.pop();

const senna = pilotos.find(piloto => piloto === 'Senna');

console.log(senna);

pilotos.splice(1,1); //remove 1 item na posição 1

console.log(pilotos);
