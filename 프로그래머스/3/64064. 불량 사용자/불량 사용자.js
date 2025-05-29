function solution(user_id, banned_id) {
  const candidates = Array.from({ length: banned_id.length }, () => []);

  const checkIfMatch = (banned, id) => {
    const isMatch = banned.split('').every((cha, i) => {
      if (cha === '*') {
        return true;
      } else {
        return cha === id[i];
      }
    })

    return isMatch;
  }

  for (let i = 0; i < banned_id.length; i++) {
    for (let j = 0; j < user_id.length; j++) {
      if (banned_id[i].length !== user_id[j].length) continue;

      if (checkIfMatch(banned_id[i], user_id[j])) {
        candidates[i].push(user_id[j]);
      }
    }
  }

  // 백트래킹으로 조합(경우의 수) 세기
  const resultSet = new Set();

  const dfs = (idx, usedSet, path) => {
    if (idx === candidates.length) {
      const key = [...path].sort().join('|');
      resultSet.add(key);
      return;
    }

    for (const user of candidates[idx]) {
      if (usedSet.has(user)) continue;

      usedSet.add(user);
      path.push(user);

      dfs(idx + 1, usedSet, path);

      path.pop();
      usedSet.delete(user);
    }
  }

  dfs(0, new Set(), []);
  
  return resultSet.size;
}


// 처음에 시도한 방식
// function solution(user_id, banned_id) {
//     let bannedCnt = 0;
//     const banned_id_obj = {};
//     const isUsed = {};
    
//     const checkIfMatch = (banned, target) => {
//   let asterCnt = 0;
//   const targetArr = target.split('');
//   const bannedWithoutAster = banned.split('').filter((cha) => cha !== '*').join('');

//   for (let i = 0; i < banned.length; i++) {
//     if (banned[i] === '*') {
//       if (asterCnt === 0) {
//         targetArr.splice(i, 1);
//       } else {
//         targetArr.splice(i - asterCnt, 1);
//       }
      
//       asterCnt++;
//     }
//   }

//   if (bannedWithoutAster === targetArr.join('')) {
//     return true;
//   } else {
//     return false;
//   }
// }
    
//     for (let i = 0; i < banned_id.length; i++) {
//         if (banned_id_obj[banned_id[i]]) {
//             banned_id_obj[banned_id[i]].pop();
//             continue;
//         }
        
//         for (let j = 0; j < user_id.length; j++) {
//             if (banned_id[i].length !== user_id[j].length || isUsed[user_id[j]]) continue;
            
//             if (checkIfMatch(banned_id[i], user_id[j])) {
//                 if (banned_id_obj[banned_id[i]] === undefined) {
//                     banned_id_obj[banned_id[i]] = [user_id[j]];
//                     isUsed[user_id[j]] = true;
//                 } else {
//                     banned_id_obj[banned_id[i]].push(user_id[j]);
//                     isUsed[user_id[j]] = true;
//                 }
//             }
//         }
//     }
    
//     console.log(banned_id_obj);
//     return Object.values(banned_id_obj).reduce((acc, cur) => acc * cur.length, 1);
// }