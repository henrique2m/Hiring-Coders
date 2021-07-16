// Boolean
const contaPaga: boolean = false;

// Number
const idade: number = 23;
const avalicao: number = 4.5;

// String
const nome: string = "Henrique da Silva Moreira";

//Array
const idades: number[] = [23, 28, 45];
const idades2: Array<number> = [23, 14, 30];

//tuple
let jogadores: [string, number, boolean];
jogadores = ["Henrique", 4, true];

//Enum
enum StatusAprovacao {
  Aprovado = "001",
  Pedente = "0002",
  Rejeitado = "003",
}

const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

//Any
const retornoDaAPI: any[] = ["123", 23, true];
const retornoDaAPI2: any = { nome: "Henrique", idade: 23 };

//Void

function printNaTela(msg: string) {
  console.log(msg);
}

// Null e Undefined
const u: undefined = undefined;
const n: null = null;

//Object
function criar(object: object) {
  return object;
}

criar({ nome: "Henrique", idade: 23 });

//Never
function loopInfinito(): never {
  while (true) {}
}

function erro(mensagem: string): never {
  throw new Error(mensagem);
}

// Union Types
const nota: string | number = 5;

function exibirNota(nota: number | string) {
  console.log(`A nota é ${nota}`);
}

//Alias
type Funcionario = {
  nome: string;
  sobrenome: string;
  dataNascimento: Date;
};

const funcionarios: Funcionario[] = [
  {
    nome: "Henrique",
    sobrenome: "Moreira",
    dataNascimento: new Date(),
  },
  { nome: "Henrique", sobrenome: "Moreira", dataNascimento: new Date() },
];

function tratarFuncionarios(funcionarios: Funcionario[]) {
  for (let funcionario of funcionarios) {
    console.log("Nome do funcionário:", funcionario.nome);
  }
}

// Valores opcionais

type Contato = {
  nome: string;
  telefone1: string;
  telefone2?: string; // está propriedade é opcional
};

// Type Assertion
const minhaIdade: any = 23;
(minhaIdade as number).toString();
// <number>minhaIdade.toString()

const input = document.getElementById("numero1") as HTMLInputElement;
// const input = <HTMLInputElement>document.getElementById("numero1");
console.log(input.value);
