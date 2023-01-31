function solution(before, after) {
    let count = 0;
    let answer = "";
    for(i=0; i<after.length; i++) {
        if(before.includes(after[i])) {
            count = count+1
            before = before.replace(after[i], '')
        }
    }
    if(after.length === count) {
        return 1
    } else {
        return 0
    }
}

// before은 after의 요소를 모두 포함해야하면서, after의 요소들의 개수까지 똑같아야한다.