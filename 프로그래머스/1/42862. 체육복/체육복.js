function solution(n, lost, reserve) {
    const newLost = lost.filter((student) => !reserve.includes(student)).sort((a, b) => a - b);
    const newReserve = reserve.filter((student => !lost.includes(student))).sort((a, b) => a - b);
    
    for (let i = 0; i < newLost.length; i++) {
        const candidStudent1 = newLost[i] - 1;
        const candidStudent2 = newLost[i] + 1;
        
        if (newReserve.includes(candidStudent1)) {
            const idx = newReserve.indexOf(candidStudent1);
            newLost.splice(i, 1);
            newReserve.splice(idx, 1);
            
            i--;
        } else if (newReserve.includes(candidStudent2)) {
            const idx = newReserve.indexOf(candidStudent2);
            newLost.splice(i, 1);
            newReserve.splice(idx, 1);
            
            i--;
        }
    }
    
    return n - newLost.length;
}