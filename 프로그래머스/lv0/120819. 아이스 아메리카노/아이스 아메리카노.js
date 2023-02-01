function solution(money) {
    let answer = [parseInt(money / 5500), money - 5500 * parseInt(money / 5500)];
    return answer;
}