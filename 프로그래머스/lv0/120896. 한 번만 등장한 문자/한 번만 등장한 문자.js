function solution(s) {
    let arr = [];

let arr1 = '';

for (i = 0; i < s.length; i++) {
    arr.push(s[i])
}

let j = 0;
while (true) {
    if (arr.length !== 1) {
        arr.splice(0, 1)
        if (arr.includes(s[j])) {
            arr = arr.filter((element) => element !== s[j])
        } else {
            break;
        }
        j = j + 1;
    } else {
        break;
    }
}
    let answer = '';
    arr.sort();
    for(k=0; k<arr.length; k++) {
        answer = answer+arr[k]
    }
    return answer;
}