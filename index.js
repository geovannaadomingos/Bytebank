import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

// instância da classe, também chamada de objeto
const cliente1 = new Cliente();
cliente1.nome = "Maria";
cliente1.cpf = "92199102";

// instância da classe, também chamada de objeto
const contaCorrenteCliente1 = new ContaCorrente();
contaCorrenteCliente1.agencia = 109229;
contaCorrenteCliente1.cliente = cliente1;

// instância da classe, também chamada de objeto
const cliente2 = new Cliente();
cliente2.nome = "Joana";
cliente2.cpf = "59382739";

// instância da classe, também chamada de objeto
const contaCorrenteCliente2 = new ContaCorrente();
contaCorrenteCliente2.agencia = 245671;
contaCorrenteCliente2.cliente = cliente2;



//teste
console.log("------Cliente 1------")
console.log(contaCorrenteCliente1)
console.log("Saldo inicial da conta: " + contaCorrenteCliente1._saldo);
contaCorrenteCliente1.depositar(50);
console.log("Saldo da conta após depósito: " + contaCorrenteCliente1._saldo);
contaCorrenteCliente1.sacar(20);
console.log("Saldo da conta após saque: " + contaCorrenteCliente1._saldo);
contaCorrenteCliente1.transferir(5, contaCorrenteCliente2);
console.log("Saldo da conta após tranferência: " + contaCorrenteCliente1._saldo);

console.log("------Cliente 2------")
console.log(contaCorrenteCliente2)
console.log("Saldo após recebimento de tranferência: " + contaCorrenteCliente2._saldo);

