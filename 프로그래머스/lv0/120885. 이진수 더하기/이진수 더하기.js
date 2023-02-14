function solution(bin1, bin2) {
    let total = 0;
let total2 = 0;
let tenNum = 1;
let tenNum2 = 1;
for (let i = bin1.length - 1; 0 <= i; i--) {
    if (bin1[i] === "0") {
        tenNum = 0;
    } else if (bin1[i] === "1") {
        tenNum = 2 ** (bin1.length-i-1);
    }
    total += tenNum;
}
for (let j = bin2.length - 1; 0 <= j; j--) {
    if (bin2[j] === "0") {
        tenNum2 = 0;
    } else if (bin2[j] === "1") {
        tenNum2 = 2 ** (bin2.length-j-1);
    }
    total2 += tenNum2;
}
let decimalSum = total+total2;
let binary = "";
while (decimalSum > 0) {
  let remainder = decimalSum % 2;
  binary = remainder + binary;
  decimalSum = Math.floor(decimalSum / 2);
}
if (binary === "") {
  binary = "0";  // handle the special case of 0
}
return binary
    // 십진수 이진수로 변환하는 알고리즘 외우기.
}