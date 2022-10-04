function SelectionSort(lista){
    let iterations = 0;
    for(let j = 0; j < (lista.length-1); j++){
        let minIndex = j;
        for(let i = j; i < lista.length; i++){
            if(lista[i] < lista[minIndex]){
                minIndex = i;
            }
            iterations++;
        }
        if(lista[j] > lista[minIndex]){
            let aux = lista[j];
            lista[j] = lista[minIndex];
            lista[minIndex] = aux;
        }
    }
    console.log(iterations);
    return lista;
}

let lista = [7,5,1,8,3];
let lista1 = [117,90,69,69,8,6,5];
let lista2 = [7,7,7,7,1,1,1,9,9,9,0,4,5,7,1];

console.log(SelectionSort(lista));
console.log(SelectionSort(lista1));
console.log(SelectionSort(lista2));