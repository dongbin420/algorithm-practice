const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ');
input = input.map((item) => +item);

if (45 <= input[1]) {
    num1 = input[0];
    num2 = input[1]-45;
}

else if (input[1] < 45 && input[0] !== 0) {
    num1 = input[0]-1;
    num2 = 15+input[1];
}

else if (input[1] < 45 && input[0] == 0) {
    num1 = input[0]+23;
    num2 = 15+input[1];
}

console.log(num1, num2);