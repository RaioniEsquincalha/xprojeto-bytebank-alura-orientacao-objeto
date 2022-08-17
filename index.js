import {Cliente} from "./Cliente.js";
import {Gerente} from "./funcionarios/Gerente.js"
import {Diretor} from "./funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";



const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456")
const gerente = new Gerente ("Ricardo", 5000, 22345678911);
gerente.cadastrarSenha("54321")

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "54321");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");


console.log(gerenteEstaLogado, diretorEstaLogado);





// import {ContaCorrente} from "./conta/ContaCorrente.js";
// import { ContaPoupanca } from "./conta/ContaPoupanca.js";
// import { ContaSalario } from "./conta/ContaSalario.js";

// const cliente1 = new Cliente("Ricardo", 11122233309);

// const contaCorrenteRicardo = new ContaCorrente( cliente1, 1001);
// const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
// const contaSalario = new ContaSalario(cliente1);
// contaSalario.depositar(100);
// contaSalario.sacar(10);

// console.log(contaSalario);
