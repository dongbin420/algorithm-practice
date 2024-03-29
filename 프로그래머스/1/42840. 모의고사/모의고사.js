function solution(answers) {
    const patterns = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2 ,5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
     
    
    const corrects = [0, 0, 0]
    
    for (let i = 0; i < answers.length; i++) {
        for (let j = 0; j < patterns.length; j++) {
            if (answers[i] === patterns[j][i % patterns[j].length]) {
                corrects[j]++;
            }
        }
    }
    
    let maxCorrect = Math.max(...corrects);
    const winner = [];
    
    for (let i = 0; i <= 2; i++) {
        if (corrects[i] === maxCorrect) {
            winner.push(i + 1);
        }
    }
    
    return winner.sort((a, b) => a - b);
}

// if (answers[i] === patterns[j][i % patterns[j].length])
// 위 조건문이 이 문제의 사실상 전부다. 패턴이 있는 것을 활용해서 이 조건문을
// 만들어 낼 수 있어야 함..