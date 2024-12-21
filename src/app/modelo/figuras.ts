/**
 * Jerarquía de clases: Circulo y TrianguloEscaleno derivan de FiguraGeometrica.
 * TrianguloEquilatero deriva de TrianguloEscaleno, con su método sobreescrito
 * de acuerdo a lo necesario para el cálculo del perímetro.
 */

export abstract class FiguraGeometrica {
    nombre: String=""

    constructor(nombre: string){
        this.nombre = nombre
    }

    abstract calcularPerimetro(): number
}

export class Circulo extends FiguraGeometrica {
    radio: number

    constructor(nombre: string, radio:number){
        super(nombre)
        this.radio = radio
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.radio
    }
}

export class TrianguloEscaleno extends FiguraGeometrica {
    ladoA: number
    ladoB: number
    ladoC: number

    constructor(nombre:string, ladoA:number, ladoB:number, ladoC:number) {
        super(nombre)
        this.ladoA = ladoA
        this.ladoB = ladoB
        this.ladoC = ladoC
    }

    calcularPerimetro(): number {
        return this.ladoA + this.ladoB + this.ladoC
    }
}

export class TrianguloEquilatero extends TrianguloEscaleno {

    constructor(ladoA: number) {
        super("Equilatero", ladoA, ladoA, ladoA) //uso "super" para heredar, ingresando el nombre de la figura
    }

    override calcularPerimetro(): number {  //método sobreescrito
        return this.ladoA * 3
    }
}