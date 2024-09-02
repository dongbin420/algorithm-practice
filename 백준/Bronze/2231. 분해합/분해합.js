const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim();

const inputNum = Number(input);
let constructor = 1;
let hasConstructor = false;

while (constructor < inputNum) {
  const stringConstructor = String(constructor);
  let sum = constructor;

  for (let i = 0; i < stringConstructor.length; i++) {
    sum += Number(stringConstructor[i]);
  }

  if (inputNum === sum) {
    console.log(constructor);
    hasConstructor = true;

    break;
  }

  constructor++;
}

if (!hasConstructor) {
  console.log(0);
}
