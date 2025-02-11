function solution(id_list, report, k) {
    const reportNum = {}; // 각 이용자가 신고 당한 횟수
    const reportPeople = {} // 각 이용자가 신고한 사람들
    const mailNum = {};
    const answer = [];
    
    for (const name of id_list) {
        reportNum[name] = 0;
    }
    
    for (const reportCase of report) {
        const [send, take] = reportCase.split(' ');
        
        if (reportPeople[send] && !reportPeople[send].includes(take)) {
            reportPeople[send].push(take);
            reportNum[take] = reportNum[take] + 1;
        } else if (!reportPeople[send]) {
            reportPeople[send] = [take];
            reportNum[take] = reportNum[take] + 1;
        }
    }
    
    for (const [name, list] of Object.entries(reportPeople)) {
        const newList = list.filter((person) => reportNum[person] >= k);
        
        mailNum[name] = newList.length;
    }
    
    id_list.forEach((value, idx) => {
        if (mailNum[value]) {
            answer[idx] = mailNum[value];
        } else {
            answer[idx] = 0;
        }
    })
    
    return answer;
}

