class Veiculo {
    rodas = 4;
    mover(direcao){};
    virar(direcao){};
}

class Moto extends Veiculo {
    constructor(){
        super(); //herda atributos da classe pai
        this.rodas = 4;
    }
}