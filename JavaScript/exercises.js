function fizzBuzz(input) {
  if (typeof input !== "number") return "Não é um número";
  if (input % 3 === 0 && input & (5 === 0)) return "FizzBuzz";
  if (input % 3 === 0) return "Fizz";
  if (input % 5 === 0) {
    return "Buzz";
  }

  return input;
}

let result = fizzBuzz(15);
console.log(result);

let newString = "";

function reverseAString(string) {
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }

  return newString;
}

console.log(reverseAString("JavaScript"));

function convertToFahrenheit(value) {
  return value * 1.8 + 32;
}

console.log(convertToFahrenheit(40));
