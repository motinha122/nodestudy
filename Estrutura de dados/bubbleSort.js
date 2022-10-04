function BubbleSort(lista){
    let aux = 0;
    let iterations = 0;
    let finished = true;
    for(i = lista.length; i > 0; i--){
        finished = true;
        for(j = 0; j < (lista.length-1); j++){
            if(lista[j] > lista[j+1]){
                aux = lista[j+1];
                lista[j+1] = lista[j];
                lista[j] = aux;
                finished = false;
            }
            iterations++;
        }
        if(finished){
            break;
        }
    }
    console.log(iterations);
    return lista;
}

let lista = [7,5,1,8,3];
let lista1 = [117,90,69,69,8,6,5];
let lista2 = [7,7,7,7,1,1,1,9,9,9,0,4,5,7,1];

console.log(BubbleSort(lista));
console.log(BubbleSort(lista1));
console.log(BubbleSort(lista2));
