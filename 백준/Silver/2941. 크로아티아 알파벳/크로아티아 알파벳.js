const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input[0] = input[0]
.replace(/dz=/g, '.')
.replace(/nj/g, '.')
.replace(/c=/g, '.')
.replace(/c-/g, '.')
.replace(/d-/g, '.')
.replace(/lj/g, '.')
.replace(/s=/g, '.')
.replace(/z=/g, '.');

console.log(input[0].length);