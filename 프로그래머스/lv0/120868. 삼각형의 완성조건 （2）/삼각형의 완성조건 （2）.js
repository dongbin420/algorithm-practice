function solution(sides) {
    let side1 = sides[0];
let side2 = sides[1];
let side3 = [];
let newArr = [];
let newArr2 = [];

for(let i = 1; i < side1+side2; i++) {
    side3.push(i)
}

console.log(side3)

if(side2>side1) {
    for(let j = 0; j < side3.length; j++) {
    if(side2 < side1+side3[j]) {
        newArr.push(side3[j])
    }
} 
} else {
    for(let k = 0; k < side3.length; k++) {
        if(side1<side2+side3[k]) {
            newArr.push(side3[k])
        }
    }
}
    return newArr.length;
}
// 의사코드
// 입력: 삼각형 두 변의 길이가 담긴 배열 sides
// 출력: 나머지 한 변이 될 수 있는 정수의 개수
// 조건: 삼각형의 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 한다.
// 나머지 한 변이 무조건 가장 긴 변이어야 하는건 아니다.

// 1. side3 가 가장 긴변일때
//     side3는 side1+side2보다 작아야한다.
//     -> side3는 1 과 2가 될 수 있음.
//     2. side2 가 가장 긴변일때
//     side2는 side1+side3 보다 작아야한다.
//     -> side3는 1보다 커야함
//     3. side1이 가장 긴변 일 수는 없다.(이미가장 작음)
    
//     => 1번케이스와 2번케이스가 둘다 충족되는 2한개의 경우 뿐.