const print = (...p) => console.log(...p); 

const timeout = 3000;
const finished = () => console.log('done');

setTimeout(finished,timeout);

print('Xampson','Batata');
