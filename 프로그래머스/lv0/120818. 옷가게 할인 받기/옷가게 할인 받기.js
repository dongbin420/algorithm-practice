function solution(price) {
    let answer;
    if (price < 100000) {
        answer = price;
    } else if (price >= 100000 && price < 300000) {
        answer = parseInt(price*95/100);
    } else if (price >= 300000 && price < 500000) {
        answer = parseInt(price*90/100);
    } else if (price >= 500000) {
        answer = parseInt(price*80/100);
    }
    return answer;
}