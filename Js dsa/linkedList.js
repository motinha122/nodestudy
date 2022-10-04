class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    append(elem){
        if(this.head !== null){
            let pointer = this.head;
            while(pointer.next !== null){
                pointer = pointer.next;
            }
            pointer.next = new Node(elem);
        }
        else{
            this.head = new Node(elem);
        }
        this.size++;
    }

    get(index){
        let pointer = this.head;
        for(let i = 0; i != index; i++){
            if(pointer !== null){
                pointer = pointer.next;
            }
            else{
                throw 'Index out of range';
            }
        }
        if(pointer !== null){
            return pointer.data;
        } else {
            throw 'Index out of range';
        }
    }

    set(index,elem){
        let pointer = this.head;
        for(let i = 0; i != index; i++){
            if(pointer !== null){
                pointer = pointer.next;
            }
            else{
                throw 'Index out of range';
            }
        }
        if(pointer !== null){
            pointer.data = elem;
        } else {
            throw 'Index out of range';
        }
    }
}

const lista1 = new LinkedList();
lista1.append(2);
lista1.append(55);
lista1.append(6); 
console.log(lista1);
console.log(lista1.head);

console.log(lista1.get(2));
lista1.set(2,20);
console.log(lista1.get(2));
