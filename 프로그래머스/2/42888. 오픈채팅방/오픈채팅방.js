function solution(record) {
    const comInfos = [];
    const userNicks = {};
    const results = [];
    
    for (let i = 0; i < record.length; i++) {
        const [com, id, nick] = record[i].split(' ');
        comInfos.push({ com: com, id: id });
        
        if (com === 'Enter') {
            userNicks[id] = nick;
        } else if (com === 'Change') {
            userNicks[id] = nick;
        }
    }
    
    comInfos.forEach((process) => {
        process.nick = userNicks[process.id];
        
        if (process.com === 'Enter') {
            results.push(`${process.nick}님이 들어왔습니다.`);
        } else if (process.com === 'Leave') {
            results.push(`${process.nick}님이 나갔습니다.`);
        } 
    })
    
    return results;
}

// 두 번째 풀 때 작성한 코드
// function solution(record) {
//   const userNicks = {};
//   const chat = [];
//   const result = [];

//   for (let i = 0; i < record.length; i++) {
//     const [com, id, nick] = record[i].split(' ');

//     if (com === 'Enter') {
//       userNicks[id] = nick;
//       chat.push({ status: com, id: id });
//     } else if (com === 'Leave') {
//       chat.push({ status: com, id: id });
//     } else if (com === 'Change') {
//       userNicks[id] = nick;
//     }
//   }

//   for (let j = 0; j < chat.length; j++) {
//     if (chat[j].status === 'Enter') {
//       result.push(`${userNicks[chat[j].id]}님이 들어왔습니다.`);
//     } else if (chat[j].status === 'Leave') {
//       result.push(`${userNicks[chat[j].id]}님이 나갔습니다.`);
//     }
//   }

//   return result;
// }