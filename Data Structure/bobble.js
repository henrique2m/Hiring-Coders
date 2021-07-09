var values = [8, 7, 6, 5, 4, 3, 2, 1];

function sortBubbleArray() {
  let start = 0;
  let end = 8;
  let tmp;

  for (let turn = 0; turn < 8; turn++) {
    for (let pos = start; pos < end - 1; pos++) {
      if (values[pos] > values[pos + 1]) {
        tmp = values[pos];
        values[pos] = values[pos + 1];
        values[pos + 1] = tmp;
      }
    }
  }

  return values;
}

console.log(sortBubbleArray());
