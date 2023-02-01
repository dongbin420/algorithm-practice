function solution(angle) {
    var answer = 0;
    if (0 < angle && angle < 90) {
        answer = answer + 1;
    } else if (angle === 90) {
        answer = answer + 2;
    } else if (90 < angle && angle < 180) {
        answer = answer + 3;
    } else if (angle === 180) {
        answer = answer + 4;
    }
    return answer;
}