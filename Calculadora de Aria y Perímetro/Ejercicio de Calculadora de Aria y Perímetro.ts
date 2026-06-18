class FiguraGeometrica {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }
    mostrarTipo(): void {
        console.log(`Soy una figura geométrica: ${this.nombre}`);
    }
}

// Círculo
class Circulo extends FiguraGeometrica {
    radio: number;
    constructor(radio: number) {
        super("Círculo");
        this.radio = radio;
    }
    calcularArea(): number {
        return Math.PI * this.radio * this.radio;
    }
}

// Rectángulo
class Rectangulo extends FiguraGeometrica {
    base: number;
    altura: number;
    constructor(base: number, altura: number) {
        super("Rectángulo");
        this.base = base;
        this.altura = altura;
    }
    calcularArea(): number {
        return this.base * this.altura;
    }
}

// Triángulo
class Triangulo extends FiguraGeometrica {
    base: number;
    altura: number;
    constructor(base: number, altura: number) {
        super("Triángulo");
        this.base = base;
        this.altura = altura;
    }
    calcularArea(): number {
        return (this.base * this.altura) / 2;
    }
}

// objetos
const circulo = new Circulo(5);
const rectangulo = new Rectangulo(8, 4);
const triangulo = new Triangulo(6, 3);

// resultados
circulo.mostrarTipo();
console.log("Área:", circulo.calcularArea());

rectangulo.mostrarTipo();
console.log("Área:", rectangulo.calcularArea());

triangulo.mostrarTipo();
console.log("Área:", triangulo.calcularArea());
