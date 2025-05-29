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

// 코드에 대한 설명
// 이 문제는 크게 두 가지 작업으로 나뉜다.
// 1. 불량아이디가 될 수 있는 후보 아이디들을 2차원 배열에 정리하는 작업(프로퍼티 이름은 중복될 수는 없으니 객체를 쓸 수 없어, 인덱스로 판별할 수 있는 배열을 사용함)
// 2. 1에서 만든 2차원 배열을 기반으로 백트래킹(dfs를 진행하되, 특정 조건에 충족하지 않으면 이전까지 탐색했던 지점으로 다시 돌아와서 dfs를 진행하는 알고리즘)을 통해 이름 중복을 피해 각 불량아이디에 하나의 후보 아이디가 매칭되게끔 조합을 만들고 이 조합들을 set에 저장해, 이 set의 수가 경우의 수가 되게끔 하는 작업 

// 이 문제에서 백트래킹을 사용하려는 아이디어를 생각해내려면, 예를 들어 입출력 예3의 경우일때, 1번 작업을 끝내면, [ [ 'frodo', 'fradi' ], [ 'frodo', 'crodo' ], [ 'abc123', 'frodoc' ], [ 'abc123', 'frodoc' ] ] 이런 2차원 배열이 만들어진다.
// 이 2차원 배열의 길이는 즉 불량 아이디의 개수이고 각 요소 즉 배열은 이 불량아이디가 될 수 있는 후보이다.
// 이 후보중에 단 '한 개'의 아이디만 불량아이디에 매칭되어야 한다. 그리고 이전에 이미 사용된 아이디는 다음 불량아이디에 매칭되면 안된다.
// 따라서, 각 배열마다 한 개씩 뽑기 위해서는 dfs탐색을 생각할 수 있다. 게다가 이전에 이미 사용된 아이디는 사용할 수 없다는 조건이 있기 때문에 조건에 안 맞으면 이전으로 돌아가 다른 방향을 탐색해야한다. 여기에서 백트래킹이 필요함을 알 수 있다.
// 이런 아이디어를 문제를 분석하면서 떠올릴 수 있어야하고, 이를 기반으로 코드를 작성하면 충분히 풀 수 있을 것.


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