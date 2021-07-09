var elements = [];
var top = -1;
const MAX = 10;

function push(number) {
  if (top < MAX) {
    top = top + 1;
    elements[top] = number;

    return;
  }

  console.log("Pilha esta cheia");
}

function isEmpty() {
  return top === -1;
}

function pop() {
  if (top != -1) {
    let number = elements[top];
    top = top - 1;

    return number;
  }

  console.log("Pilha está vazia!");
}

// --- exemplo de uso para a estrutura de dados Pilha ---

var decimalNumber = 10;
var rest;

console.log("Hora de empilhar....");
while (decimalNumber !== 0) {
  rest = parseInt(decimalNumber % 2);
  push(rest);
  console.log(rest);
  decimalNumber = parseInt(decimalNumber / 2);
}

console.log("Desempilhando tudo...");
while (!isEmpty()) {
  console.log(pop());
}
