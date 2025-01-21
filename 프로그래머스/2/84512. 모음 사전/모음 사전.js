function solution(word) {
    const alphabet = ['A', 'E', 'I', 'O', 'U'];
    const dictionary = [];
    
    const dfs = (cur) => {
        for (let i = 0; i < alphabet.length; i++) {
            const newWord = cur + alphabet[i];
            dictionary.push(newWord);
            
            if (newWord.length < 5) {
                dfs(cur + alphabet[i]);
            }
        }
    }
    
    dfs('');
    
    return dictionary.indexOf(word) + 1;
}