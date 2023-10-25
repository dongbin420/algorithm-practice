const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString();

let subExpression = input.split('-');
let result = 0;
subExpression.map((str, index) =>
  str
    .split('+')
    .forEach((num) =>
      index === 0 ? (result += Number(num)) : (result -= Number(num))
    )
);

console.log(result);
