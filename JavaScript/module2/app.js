const books = require("./database");
const readline = require("readline-sync");

const inputStart = readline.question("Deseja buscar um livro?");

if (inputStart.toLocaleUpperCase() === "S") {
  console.log("Essas São as categorias disponíveis: ");
  console.log("Psicologia", "/Tecnologia");

  const inputCategory = readline.question("Qual categoria você escolhe?");

  const response = books.filter((book) => book.category === inputCategory);

  console.table(response);
} else {
  const booksOrdered = books.sort((a, b) => a.pages - b.pages);
  console.log("Esses são todos os livros disponíveis:");

  console.table(booksOrdered);
}
