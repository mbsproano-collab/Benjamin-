class CuentaBancaria {
    // Propiedad privada (no accesible directamente)
    private saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    // Método público para depositar dinero
    public depositar(monto: number): void {
        if (monto > 0) {
            this.saldo += monto;
            console.log(`Depósito exitoso. Nuevo saldo: ${this.saldo}`);
        } else {
            console.log("El monto debe ser mayor a 0");
        }
    }

    // Método público para retirar dinero
    public retirar(monto: number): void {
        if (monto > 0 && monto <= this.saldo) {
            this.saldo -= monto;
            console.log(`Retiro exitoso. Nuevo saldo: ${this.saldo}`);
        } else {
            console.log("Fondos insuficientes o monto inválido");
        }
    }

    // Getter para consultar el saldo
    public getSaldo(): number {
        return this.saldo;
    }
}

// Uso de la clase
const cuenta = new CuentaBancaria(100);

cuenta.depositar(50);
cuenta.retirar(30);

console.log(`Saldo final: ${cuenta.getSaldo()}`);
