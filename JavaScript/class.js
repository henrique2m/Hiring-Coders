class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  read() {
    return `Estou lendo ${this.title}`;
  }
}

class ITBook extends Book {
  constructor(title, author, pages, technology) {
    super(title, author, pages);
    this.technology = technology;
  }
}

let itBook = new ITBook("Mindset", "Carol S. Dweck", 400, "Psicologia");

console.log(itBook);

class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

let person = new Person("Henrique");
person.name = "Moreira";
console.log(person.name);
