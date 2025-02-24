function solution(s){
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push('(');
        } else {
            if (stack.length > 0) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    
    if (stack.length > 0) {
        return false;
    } else {
        return true;
    }
}

// 이 문제는 한가지 종류의 괄호인 (와 )만 사용하므로 pop을 이용한 스택을 사용하든 shift를 이용한 큐를 사용하든 똑같이 정답이 된다. 하지만, 문제가 ()뿐만 아니라 [],{} 등 여러 괄호를 같이 사용하는 경우라면 정확하게 가장 최근에 등장한 괄호의 종류가 무엇인지를 인지하고 적절하게 제거하는게 중요하므로 이런 상황에서는 스택만 사용해야 문제를 풀 수 있다. 