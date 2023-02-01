function solution(array) {
    let answer;
    array.sort(function (a, b) {
               return a - b;
               })
    answer = array[parseInt(array.length/2)];
    return answer;
}