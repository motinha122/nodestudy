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
    
    getnode(index){
        let pointer = this.head;
        for(let i = 0; i != index; i++){
            if(pointer !== null){
                pointer = pointer.next;
            }
            else{
                throw 'Index out of range';
            }
        }
        return pointer;
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
        let pointer = this.getnode(index);
        if(pointer !== null){
            return pointer.data;
        } else {
            throw 'Index out of range';
        }
    }

    set(index,elem){
        let pointer = this.getnode(index);
        if(pointer !== null){
            pointer.data = elem;
        } else {
            throw 'Index out of range';
        }
    }

    index(elem){
        let pointer = this.head;
        let i = 0;
        while(pointer !== null){
            if(pointer.data == elem){
                return i;
            }
            pointer = pointer.next;
            i++;
        }
        throw 'Given element is not in list';
    }

    insert(index,elem){
        let node = new Node(elem);
        if(index == 0){
            node.next = this.head;
            this.head = node;
        }
        else{
            let pointer = this.getnode(index-1)
            node.next = pointer.next;
            pointer.next = node;
        }
        this.size++;
    }

    remove(elem){
        if(this.head === null){
            throw 'Given element is not in list';    
        } 
        if(this.head.data === elem){
            this.head = this.head.next;
            this.size--;
        }
        else{
            let ancestor = this.head;
            let pointer = this.head.next;
            while(pointer !== null){
                if(pointer.data === elem){
                    ancestor.next = pointer.next;
                    pointer.next = null;
                }
                ancestor = pointer;
                pointer = pointer.next;
            }
            this.size--;
            return true;
        }
        throw 'Given element is not in list';
    }

    print(){
        let list = "";
        let pointer = this.head;
        while(pointer !== null){
            if(pointer.next === null){
                list += pointer.data;
                pointer = pointer.next
            }
            else{
                list += pointer.data + "->";
                pointer = pointer.next; 
            }
        }
        return list;
    }
}

const lista1 = new LinkedList();
lista1.append(2);
lista1.append(55);
lista1.append(6); 
console.log(lista1.get(2));
lista1.set(2,20);
console.log(lista1.get(2));
console.log(lista1.index(20));
lista1.insert(1,25);
console.log(lista1.get(1));
console.log(lista1.print());

