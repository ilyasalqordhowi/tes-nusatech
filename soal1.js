const input = [5, 3, 8, 6, 1, 9, 2];
console.log("Input:", input);

function urutkanGenapGanjil(arr) {
  const genap = arr.filter((num) => num % 2 === 0).sort((a, b) => a - b);
  const ganjil = arr.filter((num) => num % 2 !== 0).sort((a, b) => a - b);

  return [...genap, ...ganjil];
}

const output = urutkanGenapGanjil(input);
console.log("Output:", output);
