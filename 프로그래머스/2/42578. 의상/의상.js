function solution(clothes) {
    const mapOfClothes = new Map();
    
    for (let i = 0; i < clothes.length; i++) {
        const [one, type] = clothes[i];
        
        if (mapOfClothes.get(type)) {
            mapOfClothes.set(type, [...mapOfClothes.get(type), one]);
        } else {
            mapOfClothes.set(type, [one])
        }
    }
    
    let combinationCnt = 1; 
        
    for (const [key, value] of mapOfClothes) {
            combinationCnt *= value.length + 1; // 해당 옷 종류를 입지 않는 경우 포함하기 위해 +1
        }
        
    return combinationCnt - 1; // 모든 종류를 통틀어 하나도 입지 않는 경우는 제외해야 하므로, -1
}

// 1. 위 풀이 설명
// 기본적으로 해시 테이블을 이용해, 각 옷 종류에 맞게 옷을 담는게 기본이지만,
// 실제 경우의 수 계산시에 가장 중요한 것은 '한 종류의 옷을 착용 or 미착용'을 고려해
// 곱할때 각 종류의 옷 수에 +1을 하는 것과, 마지막에 '아무 옷도 입지 않는 경우'를 제외
// 하기 위해, -1을 하는 것이 중요.

// 2. 아주 예전에 푼 방식 (기억도 안남, 저장용)
// function solution(clothes) {
//     const map = new Map();
    
//     for (let i = 0; i < clothes.length; i++) {
//         const cloth = clothes[i][0];
//         const clothType = clothes[i][1];
        
//         const list = map.get(clothType) ?? new Array();
        
//         list.push(cloth);
        
//         map.set(clothType, list);
//     }
    
//     let answer = 1;
    
//     for(let key of map.keys()) {
//         answer *= map.get(key).length + 1; 
//     }
    
//     return answer - 1;
// }