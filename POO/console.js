class Poligono{
    constructor(altura,largura){
        this.largura = largura;
        this.altura = altura;
    }

    get Area(){
        return this.#Calcular_Area();
    }

    #Calcular_Area(){   //
        return this.altura * this.largura;
    }
}

let quadrado = new Poligono(20,20);

console.log(quadrado);
console.log(quadrado.Area);

