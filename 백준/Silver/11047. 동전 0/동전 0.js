const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

firstLineInput = input[0].split(' ');

let coinUnitNum = +firstLineInput[0];
let goalMoney = +firstLineInput[1];
let coinUnitArr = [];
let answer = 0;


for(let i = 1; i < coinUnitNum + 1; i++) {
    coinUnitArr.push(+input[i]);
}

for(let j = coinUnitArr.length - 1; j >= 0; j--) {
    while(coinUnitArr[j] <= goalMoney) {
        goalMoney -= coinUnitArr[j];
        answer++;
    }
}

console.log(answer);