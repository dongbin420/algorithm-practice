function solution(my_string) {
    let strArr = my_string.split('+');
    let strArr2 = []
    
    for(let i = 0; i < strArr.length; i++) {
    if(strArr[i].includes("-")) {
        strArr2.push(strArr[i].split("-").reduce((acc, cur) => {
            return acc-cur
        }))
    }
}
    let newArr = strArr.filter(el => el.includes("-") === false)
    let sum1 = 0;
let sum2 = 0;
    strArr2.forEach(function(el) {
    sum1 += Number(el)
})

newArr.forEach(function (el) {
    sum2 += Number(el)
})
    return sum1+sum2;
}
// 의사코드
// 입력: 문자열로 된 수식 my_string (ex "3 + 5")
// 출력: my_string을 계산한 값.

// 추천많은 답
// let my_string = "3 + 4 - 1";

// const arr = my_string.split(' ');
// console.log(arr)

// while(arr.length > 1) arr.unshift(+arr.shift() + (arr.shift() === "+" ? 1 : -1) * arr.shift())

// console.log(arr[0]);

// 추천많은답2
// function solution(my_string) {
//     const stack = [];

//     let sign = 1;
//     for (const ch of my_string.split(" ")) {
//         if (ch === "+") {
//             sign = 1;
//         } else if (ch === "-") {
//             sign = -1;
//         } else {
//             stack.push(ch * sign);
//         }
//     }

//     return stack.reduce((a,b) => a + b, 0);
// }