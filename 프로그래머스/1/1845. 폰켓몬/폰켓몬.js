function solution(nums) {
    const numOfMon = nums.length;
    const monForTake = numOfMon / 2;
    const cntOfMon = new Map();
    let cnt = 0;
    
    for (let i = 0; i < numOfMon; i++) {
        if (cntOfMon.has(nums[i])) {
            cntOfMon.set(nums[i], cntOfMon.get(nums[i]) + 1);
        } else {
            cntOfMon.set(nums[i], 1);
        }
    }
    
    const sizeOfMonMap = cntOfMon.size;
    
    if (sizeOfMonMap >= monForTake) {
        return monForTake;
    } else {
        return sizeOfMonMap;
    }
}