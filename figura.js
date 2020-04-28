class Rectangulo{
    constructor(base,altura){
        this.base=base;
        this.altura=altura;
    }
    area(){
        return this.base*this.altura;

    }
}
/////////////////////

class Triangulo{
    constructor(base,altura){
        this.base=base;
        this.altura=altura;
    }
    area_t(){
        return this.base*this.altura/2;
    }
}
///////////////////
class Cuadrado{
    constructor(base){
        this.base=base;
       
    }
    area_c(){
        return this.base*this.base;
    }
}