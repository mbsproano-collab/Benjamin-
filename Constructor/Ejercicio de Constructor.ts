class Persona {
    private nombre: string;
    private edad: number;
    
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    public mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
    }
}

const persona1 = new Persona("Juan", 20);
persona1.mostrarDatos();
