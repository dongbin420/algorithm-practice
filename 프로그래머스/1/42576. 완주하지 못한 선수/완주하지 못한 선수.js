function solution(participant, completion) {
    const mapOfParticipant = new Map();
    
    participant.forEach((person) => {
        if (mapOfParticipant.get(person)) {
            mapOfParticipant.set(person, mapOfParticipant.get(person) + 1);
        } else {
            mapOfParticipant.set(person, 1);
        }
    })
    
    completion.forEach((person) => {
        mapOfParticipant.set(person, mapOfParticipant.get(person) - 1);
    })
    
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