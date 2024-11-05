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
    
    if (mapOfClothes.size === 1) {
        return clothes.length;
    } else {
        let combinationCnt = 1; 
        
        for (const [key, value] of mapOfClothes) {
            combinationCnt *= value.length + 1;
        }
        
        return combinationCnt - 1;
    }
}











// 1. 아주 예전에 푼 방식 (기억도 안남, 저장용)
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