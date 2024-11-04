function solution(participant, completion) {
    const mapOfParticipant = new Map();
    
    // 한 사람의 키가 이미 존재하면, 기존 값에서 1더하기, 존재하지않으면, 1로 초기화
    participant.forEach((person) => {
        if (mapOfParticipant.get(person)) {
            mapOfParticipant.set(person, mapOfParticipant.get(person) + 1);
        } else {
            mapOfParticipant.set(person, 1);
        }
    })
    
    // 완주자에 해당할때마다, 해당 키 값에 -1.
    completion.forEach((person) => {
        mapOfParticipant.set(person, mapOfParticipant.get(person) - 1);
    })
    
    // 키 값이 0이 아닌 경우를 동명이인이 있을때와 없을때 두 경우로 생각할 수 있음. 동명이인이 없는 경우는 완주하지 못한 사람만 키값이 0이 아닐것이고, 동명이인이 있는 경우도 동명이인 2명 중 한명만 완주했을때 키값이 1일 것이기에 0이 아닌 사람만 체크해서 리턴
    for ([key, value] of mapOfParticipant) {
        if (value !== 0) {
            return key;
        }
    }
}


// (처음에 푼, 시간 초과가 뜬 방식)
// function solution(participant, completion) {
//     const newParticipant = participant.map((person, idx) => {
//         return [{ name: person, id: idx }, false];
//     })
    
//     const mapOfParticipant = new Map(newParticipant);
    
//     completion.forEach((person) => {
//         for (const [key, value] of mapOfParticipant) {
//             if (key.name === person && !value) {
//                 mapOfParticipant.set(key, true);
                
//                 break;
//             }
//         }
//     })
    
//     for (const [key, value] of mapOfParticipant) {
//         if (!value) return key.name;
//     }
// }