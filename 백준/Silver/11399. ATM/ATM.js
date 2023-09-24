const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let numOfPeople = +input[0];
let timePerPerson = input[1].split(' ').map(Number);

timePerPerson.sort((a, b) => a - b);

let cal = 0;
let answer = 0;

for(let i = 0; i < timePerPerson.length; i++) {
    cal = cal + timePerPerson[i];
    answer = answer + cal;
}

console.log(answer);