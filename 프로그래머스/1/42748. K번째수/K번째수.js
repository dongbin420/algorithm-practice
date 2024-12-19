function solution(array, commands) {
    const answer = [];
    
    for (let i = 0; i < commands.length; i++) {
        const [start, end, target] = commands[i];
        const newArr = array.slice(start - 1, end);
        newArr.sort((a, b) => a - b);
        answer.push(newArr[target - 1]);
    }
    
    return answer;
}