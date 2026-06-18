// ejercicio con constructor.
// Programacion Orientada a Objetos.

class Persona {
    private nombre: string;
    private edad: number;

    // Constructor
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Método para mostrar datos
    public mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
    }
}

// "Main"
const persona1 = new Persona("Juan", 20);
persona1.mostrarDatos();
