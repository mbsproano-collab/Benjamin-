class Estudiante {
    private nombre: string;
    private nota: number;

    constructor(nombre: string, nota: number) {
        this.nombre = nombre;
        this.nota = nota;
    }

    public getNombre(): string {
        return this.nombre;
    }
  
    public setNombre(nuevoNombre: string): void {
        this.nombre = nuevoNombre;
    }

    public getNota(): number {
        return this.nota;
    }

    public setNota(nuevaNota: number): void {
        if (nuevaNota >= 0 && nuevaNota <= 10) {
            this.nota = nuevaNota;
        } else {
            console.log("Nota inválida");
        }
    }

    public mostrar(): void {
        console.log(`Nombre: ${this.nombre} - Nota: ${this.nota}`);
    }
}

const estudiante1 = new Estudiante("Carlos", 8);

estudiante1.mostrar();

estudiante1.setNombre("Luis");
estudiante1.setNota(9);

console.log("Nombre actualizado:", estudiante1.getNombre());
console.log("Nota actualizada:", estudiante1.getNota());

estudiante1.mostrar();
