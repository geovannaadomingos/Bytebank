// classe: molde
export class ContaCorrente{
    //atributos da classe
    agencia;
    cliente;
    _saldo = 0;

    //método da classe
    depositar(valor) {
        if (valor >= 0) {
            this._saldo += valor;
            return valor
        }
    }
    //método da classe
    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor
        }
    }
    //método da classe
    transferir(valor,conta) {
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }

}