function solution(begin, target, words) {
    const visited = {}
    visited[begin] = false;
    
    for (const word of words) {
        visited[word] = false;
    }
    
    const queue = [[begin, 0]];
    visited[begin] = true;
    
    while (queue.length > 0) {
        const [deletedWord, steps] = queue.shift();
        
        if (deletedWord === target) {
            return steps;
        }
        
        for (let i = 0; i < words.length; i++) {
            const differences = words[i].split('').filter((char, idx) => char !== deletedWord[idx]);
            
            if (differences.length === 1 && !visited[words[i]]) {
                visited[words[i]] = true;
                queue.push([words[i], steps + 1]);
            }
        }
    }
    
    return 0;
}