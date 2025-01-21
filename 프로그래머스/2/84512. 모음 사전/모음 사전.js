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

// dfs의 원리를 따르면, 항상 첫번째 값을 우선적으로 선택하기 때문에, 선택 순서가 A, AA, AAA, AAAA, AAAAA, AAAAE, AAAAI... 순으로 선택을해서 자연스럽게 사전순으로 정렬이 된다. 