function solution(nums) {
    const monsForTake = nums.length / 2; // 가져갈 수 있는 폰켓몬 수
    const uniqueMons = new Set(nums); // 폰켓몬 종류(같은 폰켓몬이 여러 마리 있으면 중복을 제거. 왜냐하면 최대 종류의 폰켓몬을 가져가야 하니 중복되는 경우는 무시해도 됨.)
    
    // 폰켓몬을 고르는 경우는 모든 경우에, 정해진 수인 N/2 만큼임. 그래서 N/2와 같거나 적은만큼의 종류가 있는 경우만 가능함.
    // monsForTake가 더 작은 경우: 6마리의 폰켓몬이 있을때 종류가 2종류만 있으면 2종류가 최대 수이므로 N/2인 3이 아니라 2인 uniqueMons.size가 답이 되어야 함.
    // mosForTake가 더 큰 경우: 6마리의 폰켓몬이 있을때, 종류가 4종류만큼 있어도 결국엔 N/2인 세마리만 가져갈 수 있으므로 최대 종류 수는 3이어야 하므로, 3인 monsForTake가 답이 됨.
    return Math.min(monsForTake, uniqueMons.size);  
}

// (처음에 푼 방식)
// function solution(nums) {
//     const numOfMon = nums.length;
//     const monForTake = numOfMon / 2;
//     const cntOfMon = new Map();
//     let cnt = 0;
    
//     for (let i = 0; i < numOfMon; i++) {
//         if (cntOfMon.has(nums[i])) {
//             cntOfMon.set(nums[i], cntOfMon.get(nums[i]) + 1);
//         } else {
//             cntOfMon.set(nums[i], 1);
//         }
//     }
    
//     const sizeOfMonMap = cntOfMon.size;
    
//     if (sizeOfMonMap >= monForTake) {
//         return monForTake;
//     } else {
//         return sizeOfMonMap;
//     }
// }

// (기억할 점)
// - 해시 문제임을 알 수 있는 이유: 각 폰켓몬의 종류를 해당 폰켓몬의 마리 수와 매핑해야 해서 생각해야 하므로, 해시 문제임을 알 수 있다.
// - set을 사용하는게 map을 사용하는 것 보다 더 적절한 이유: 같은 종류의 폰켓몬이 2마리 이상인 경우, 종류를 계산할 때는 결국 한 마리만 있는 걸로 계산하는게 이 문제의 목적에 맞기 때문