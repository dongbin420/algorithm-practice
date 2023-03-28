function solution(my_str, n) {
    let newArr = [];
    let newArr2 = [];
    
    for(let j = 0; j < my_str.length; j++) {
    newArr.push(my_str[j])
}



for(let i = 0; i < newArr.length; i++) {
    if((i+1) % n === 0) {
        newArr2.push(newArr.slice(i+1-n, i+1))
    } 
}

if(newArr.length % n !== 0) {
    newArr2.push(newArr.slice(newArr.length-(newArr.length%n), newArr.length))
}
    
    let answer = newArr2.map(el => {
    return el.reduce((acc, cur) => {
        return acc+cur;
    })
})
    return answer;
}