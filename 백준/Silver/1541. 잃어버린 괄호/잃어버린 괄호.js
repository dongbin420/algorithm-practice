const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString();

const subExpression = input.split('-');

const sumSubExpression = (expression) => {
  return expression
    .split('+')
    .map(Number)
    .reduce((acc, cur) => acc + cur, 0);
};

let result = sumSubExpression(subExpression[0]);

for (let i = 1; i < subExpression.length; i++) {
  result -= sumSubExpression(subExpression[i]);
}

console.log(result);