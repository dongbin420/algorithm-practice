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