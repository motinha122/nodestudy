// Queue FIFO

class Queue{
    constructor(){
        this.data = [];
    }
    enqueue(item){
        this.data.push(item);
        console.log(`${item} entrou na fila`);
    }
    dequeue(){
        const item = this.data.shift();
        console.log(`${item} saiu da fila`)
    }
}

const fila = new Queue();

fila.enqueue('batata');
fila.enqueue('cenoura');
fila.enqueue('carne');
fila.dequeue();
fila.dequeue();
fila.dequeue();