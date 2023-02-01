function solution(hp) {
    let attack = 0;
    let answer = 0;
    
    while(attack+5 <= hp) {
        attack += 5;
        answer += 1;
        if (attack === hp) {
            break;
        }  
    }
    while(attack+3 <= hp) {
        attack += 3;
        answer += 1;
        if (attack === hp) {
            break;
        }
    }
    while(attack+1 <= hp) {
        attack += 1;
        answer += 1;
        if (attack === hp) {
            break;
        }
    }
    return answer;
}