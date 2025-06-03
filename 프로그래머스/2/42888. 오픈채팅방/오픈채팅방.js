function solution(record) {
    const comInfos = [];
    const userInfos = {};
    const results = [];
    
    for (let i = 0; i < record.length; i++) {
        const [com, id, nick] = record[i].split(' ');
        comInfos.push({ com: com, id: id, nick: nick });
        
        if (com === 'Enter') {
            userInfos[id] = { status: com, nick: nick };
        } else if (com === 'Leave') {
            userInfos[id].status = com;
        } else if (com === 'Change') {
            userInfos[id].nick = nick;
        }
    }
    
    
    comInfos.forEach((process) => {
        process.nick = userInfos[process.id].nick;
    })
    
    comInfos.forEach((process) => {
        if (process.com === 'Enter') {
            results.push(`${process.nick}님이 들어왔습니다.`);
        } else if (process.com === 'Leave') {
            results.push(`${process.nick}님이 나갔습니다.`);
        } 
    })
    
    return results;
}