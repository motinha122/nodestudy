//Stack LIFO 

class Stack {
    constructor(){
        this.data = [];
        this.top =-1;
    }
    push(value){ //insere um valor no topo da pilha
        this.top++;
        this.data[this.top] = value;
        return this.data;
    }
    pop(){ //retira o valor do topo da pilha
        if(this.top <0) return undefined;
        const poppedTop = this.data[this.top];
        this.data.splice(this.top,1);
        this.top--;
        return poppedTop;
    }
    peek(){ //mostra o valor no topo da lista
        return this.top >=0 ? this.data[this.top] : undefined;
    }

}

const stack = new Stack();

stack.push('batata');
stack.push('cenoura');
stack.push('carne');

console.log(stack.data);

console.log(stack.peek());

stack.pop();
console.log(stack.data);
