function solution(spell, dic) {
    let isOk = 2;
    
    for(let i = 0; i<dic.length; i++) {
        let counter = 0;
        for(let j = 0; j<spell.length; j++) {
            if(dic[i].includes(spell[j])) {
                counter = counter+1
            }
        }
        if(counter === spell.length) {
            isOk = 1;
        }
    }
    return isOk;
}
// 의사코드
// 입력: 알파벳이 담긴 배열 spell, 랜덤한 알파벳으로 이루어진 단어를 요소로 갖는 배열 dic
// 출력: spell에 담긴 알파벳을 모두 사용해 만든 단어가 dic에 존재하면 1, 존재하지 않으면 2 출력
// 의문: 조건에 맞는 단어가 오직 spell의 알파벳만을 사용해야하는건지, 포함하면서 다른 알파벳도 사용할 수 있는건지 모르겠음.