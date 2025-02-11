// 개선 방식
function solution(id_list, report, k) {
    const reportsByUser = {}; // 각 이용자가 신고한 사람들
    const reportCount = {}; // 각 이용자가 신고 당한 횟수
    
    // 각 이용자가 신고한 사람들, 각 이용자가 신고 당한 횟수 초기화
    // 각 이용자가 신고한 사람들은 중복되어도 한 명으로 취급되므로 set 자료구조 사용
    id_list.forEach((id) => {
        reportsByUser[id] = new Set();
        reportCount[id] = 0;
    })
    
    report.forEach((reportCase) => {
        const [reporter, reported] = reportCase.split(' ');
        
        if (!reportsByUser[reporter].has(reported)) {
            reportCount[reported] = reportCount[reported] + 1;
        }
        
        reportsByUser[reporter].add(reported);
    })
    
    const bannedUsers = new Set(
        id_list.filter((id) => reportCount[id] >= k)
    )
    
    const answer = id_list.map((id) => {
        let mailCount = 0;
        
        reportsByUser[id].forEach((reported) => {
            if (bannedUsers.has(reported)) mailCount++;
        })
        
        return mailCount;
    })
    
    return answer;
}



// 처음 푼 방식
// function solution(id_list, report, k) {
//     const reportNum = {}; // 각 이용자가 신고 당한 횟수
//     const reportPeople = {} // 각 이용자가 신고한 사람들
//     const mailNum = {};
//     const answer = [];
    
//     for (const name of id_list) {
//         reportNum[name] = 0;
//     }
    
//     for (const reportCase of report) {
//         const [send, take] = reportCase.split(' ');
        
//         if (reportPeople[send] && !reportPeople[send].includes(take)) {
//             reportPeople[send].push(take);
//             reportNum[take] = reportNum[take] + 1;
//         } else if (!reportPeople[send]) {
//             reportPeople[send] = [take];
//             reportNum[take] = reportNum[take] + 1;
//         }
//     }
    
//     for (const [name, list] of Object.entries(reportPeople)) {
//         const newList = list.filter((person) => reportNum[person] >= k);
        
//         mailNum[name] = newList.length;
//     }
    
//     id_list.forEach((value, idx) => {
//         if (mailNum[value]) {
//             answer[idx] = mailNum[value];
//         } else {
//             answer[idx] = 0;
//         }
//     })
    
//     return answer;
// }

