function solution(my_string) {
    let result = 0; // 문자열내에서 추가 가능한 자연수를 모두 더할 값.
    for(let i=0; i<my_string.length; i++) {
        let naturalNum = ""; // 자연수를 만들 값.
        while(!isNaN(Number(my_string[i]))) { // while을 쓰는 이유는 문자가 숫자이고 그 다음 문자도 숫자일때 반복해서 문자열에 더해주어 2자리이상 자연수를 만들어 주기 위해서이다. + isNaN 은 현재 값이 NaN 이거나, 숫자로 변환했을 때 NaN 가 되면 참을 반환하지만, Number.isNaN 은 현재 값이 NaN 이어야만 참을 반환. -> undefined가 예시임. 이것은 NaN가 아니다.(숫자는아니지만) 하지만 숫자로 변환하면 NaN가 된다. 따라서 Number.isNaN를 해야만 이게 FALSE가 나옴. ->BIGINT값은 숫자로 변형이 안된다고 뜨면서 isNaN는 에러가 뜬다. BIGINT는 NAN가 아닌데 ISNAN는 숫자로 변환해서도 봐야한다.(경우를 두번봐야하는거지) 근데 변환이 안되니 에러가 뜨는건가봄. 
            naturalNum += my_string[i];
            i++;   // 일단, 한 문자열이 숫자가 아니어서 i가 다시 for으로 돌아가서 시작할때, 지금 이 시점에서 i가 for문의 i++를 받아 1이 더해지고 다시 for문이 진행되는게 맞다. 이렇게 되면 for문에서 확인하지 않는 i가 생기는데 이는 어차피 while문에서 숫자다음의 문자열을 검사할때 i가 하나 더 추가 된 상태에서 검사하기에 for문에서 굳이 확인할 필요가 없게 되는 것이다. 또한 문자열 뒤의 숫자 그 다음 숫자도 for문에서 진행이 안되는데 이것도 while문에서 검사를 하기에 상관이 없다.
        }
        result += Number(naturalNum);
    }
    return result;
}

// Number(my_string[i]) !== NaN 앞의 값이 NaN가 맞는데도 이 등식이 성립하지 않는 것은 NaN의 성질 때문인듯. JS에서 NaN는 절대 자기자신과 같지 않은 유일한 값이다.

// const naturalNum = [];
// let seriesNum = "";
// let answer = 0; // let으로 써야하는지 확실히 몰겄음. -> let으로 써야함. 반복문안에있든 뭐든 어쨌든 값이 바뀌니깐.

// for(i=0; i<my_string.length; i++) {
//     if(Number(my_string[i]) === Number && Number(my_string[i+1]) !== Number) {
//         naturalNum.push(Number(my_string[i]))
//     } else if(Number(my_string[i]) === Number && Number(my_string[i+1]) === Number) {
//         for(j=i; j<my_string.length; j++) {
//             if(Number(my_string[j]) === Number) {
//                 seriesNum = seriesNum+my_string[j]
//             } else {
//                 naturalNum.push(Number(seriesNum))
//                 seriesNum = ""
//             }
//         }
//     }
// }

// for(k=0; k<naturalNum.length; k++) {
//     answer = answer+naturalNum[k]
// }

// 내답이고, 맞다고 생각했는데 절대 안맞음..