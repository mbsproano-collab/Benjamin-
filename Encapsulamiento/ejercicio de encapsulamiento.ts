class CuentaBancaria {
    private saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    public depositar(monto: number): void {
        if (monto > 0) {
            this.saldo += monto;
            console.log(`Depósito exitoso. Nuevo saldo: ${this.saldo}`);
        } else {
            console.log("El monto debe ser mayor a 0");
        }
    }

    public retirar(monto: number): void {
        if (monto > 0 && monto <= this.saldo) {
            this.saldo -= monto;
            console.log(`Retiro exitoso. Nuevo saldo: ${this.saldo}`);
        } else {
            console.log("Fondos insuficientes o monto inválido");
        }
    }

    public getSaldo(): number {
        return this.saldo;
    }
}

const cuenta = new CuentaBancaria(100);

cuenta.depositar(50);
cuenta.retirar(30);

console.log(`Saldo final: ${cuenta.getSaldo()}`);
