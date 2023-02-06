function solution(s) {
let arr = [];

for (i = 0; i < s.length; i++) {
    arr.push(s[i])
}   // 빈 배열에 문자열을 알파벳 하나하나로 쪼개어 넣어줌. 


let j = 0;
console.log(arr.indexOf(s[0]) !== -1);
while (true) {

    if (arr.indexOf(s[j]) !== -1) {
        arr.splice(arr.indexOf(s[j]), 1)
        if (arr.includes(s[j])) {
            arr = arr.filter((element) => element !== s[j])
        } else {
            arr.push(s[j])
        }
    }

    j = j + 1;

    if (j === s.length) {
        break;
    }
}   // 배열의 길이가 1이면 무조건 한개만 남으므로, 1이 아닐때만을 체크해야한다.
arr.sort();
let answer = '';
for (k = 0; k < arr.length; k++) {
    answer = answer + arr[k]
}
    return answer;
}