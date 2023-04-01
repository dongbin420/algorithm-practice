function solution(s) {
    let newStr = '';
    let newStr2 = '';
    let newArr = [];
    let newArr2 = []
    for(let i = 0; i < s.length; i++) {
        if(s[i] === s[i].toLowerCase()) {
            newArr.push(s[i])
        } else {
            newArr2.push(s[i])
        }
    }
    newArr.sort(function(a,b) {
        if(a > b) {
            return -1;
        } else {
            return 1;
        }
        
    });
    newArr2.sort(function(a,b) {
        if(a > b) {
            return -1;
        } else {
            return 1;
        }
        
    });
    for(let j = 0; j < newArr.length; j++) {
        newStr = newStr + newArr[j]
    }
    for(let j = 0; j < newArr2.length; j++) {
        newStr2 = newStr2 + newArr2[j]
    }
    return newStr+newStr2;
}