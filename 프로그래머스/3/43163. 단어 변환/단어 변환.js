function solution(begin, target, words) {
    const visited = [];
    const queue = [[begin, 0]];
    
    while (queue.length > 0) {
        const [deletedWord, steps] = queue.shift();
        
        if (deletedWord === target) {
            return steps;
        }
        
        for (const word of words) {
            const isChangeable = deletedWord.split('').filter((char, idx) => word[idx] !== char).length === 1 ? true : false;
            
            if (isChangeable && !visited.includes(word)) {
                queue.push([word, steps + 1]);
                visited.push(word);
            }
        }
    }
    
    return 0;
}
















// bfs를 활용한 첫번째 풀이
// function solution(begin, target, words) {
//     const visited = {}
    
//     for (const word of words) {
//         visited[word] = false;
//     }
    
//     const queue = [[begin, 0]];
    
//     while (queue.length > 0) {
//         const [deletedWord, steps] = queue.shift();
        
//         if (deletedWord === target) {
//             return steps;
//         }
        
//         for (let i = 0; i < words.length; i++) {
//             const differences = words[i].split('').filter((char, idx) => char !== deletedWord[idx]);
            
//             if (differences.length === 1 && !visited[words[i]]) {
//                 visited[words[i]] = true;
//                 queue.push([words[i], steps + 1]);
//             }
//         }
//     }
    
//     return 0;
// }