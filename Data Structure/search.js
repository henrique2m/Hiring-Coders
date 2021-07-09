var values = [5, 8, 10, 22, 38, 45, 60, 90, 120, 200];

function search(number) {
  for (let i = 0; i < 6; i++) {
    if (number === values[i]) {
      return i;
    }
  }

  return -1;
}

function searchBinary(number) {
  let start, end, middle;
  start = 0;
  end = 9;

  while (start <= end) {
    middle = parseInt((start + end) / 2);

    if (number === values[middle]) {
      return middle;
    }

    if (number > values[middle]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1;
}

// usando a nossa ferramenta de basca
console.log(search(10));
console.log(search(50));

// busca binária
console.log(searchBinary(90));
console.log(searchBinary(300));
