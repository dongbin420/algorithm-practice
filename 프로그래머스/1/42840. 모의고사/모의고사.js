function solution(answers) {
    const pattern = [[1,2,3,4,5], [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]];
    const correctness = [0, 0, 0];
    const answer = [];
    
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === pattern[0][i % pattern[0].length]) {
            correctness[0]++;
        }
        
        if (answers[i] === pattern[1][i % pattern[1].length]) {
            correctness[1]++;
        }
        
        if (answers[i] === pattern[2][i % pattern[2].length]) {
            correctness[2]++;
        }
    }
    
    const maxCorrectness = Math.max(...correctness);
    
    for (let j = 0; j < correctness.length; j++) {
        if (correctness[j] === maxCorrectness) {
            answer.push(j + 1);
        }
    }
    
    return answer;
}
















// 오래 전에 푼 풀이
// function solution(answers) {
//     const patterns = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2 ,5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
     
    
//     const corrects = [0, 0, 0]
    
//     for (let i = 0; i < answers.length; i++) {
//         for (let j = 0; j < patterns.length; j++) {
//             if (answers[i] === patterns[j][i % patterns[j].length]) {
//                 corrects[j]++;
//             }
//         }
//     }
    
//     let maxCorrect = Math.max(...corrects);
//     const winner = [];
    
//     for (let i = 0; i <= 2; i++) {
//         if (corrects[i] === maxCorrect) {
//             winner.push(i + 1);
//         }
//     }
    
//     return winner.sort((a, b) => a - b);
// }

// if (answers[i] === patterns[j][i % patterns[j].length])
// 위 조건문이 이 문제의 사실상 전부다. 패턴이 있는 것을 활용해서 이 조건문을
// 만들어 낼 수 있어야 함..