function solution(phone_book) {
    // 1. 전화번호 배열을 정렬합니다.
    phone_book.sort();
    
    // 2. 인접한 전화번호들만 비교하여 접두사 관계가 있는지 확인합니다.
    for (let i = 0; i < phone_book.length - 1; i++) {
        // 현재 번호가 다음 번호의 접두사인지 확인합니다.
        if (phone_book[i + 1].startsWith(phone_book[i])) {
            return false; // 접두사 관계가 있으면 false를 반환
        }
    }
    
    // 모든 번호를 검사한 후 접두사 관계가 없으면 true를 반환
    return true;
}

// function solution(phone_book) {
//     const setOfPhoneBook = new Set(phone_book);
    
//     for (let i = 0; i < phone_book.length; i++) {
//         for (let j = 1; j < phone_book[i].length; j++) {
//             const startNum = phone_book[i].slice(0, j);
            
//             // for (let k = 0; k < phone_book.length; k++) {
//             //     if (k !== i && startNum === phone_book[k]) {
//             //         return false
//             //     }
//             // }
            
//             // set을 이용해서 해시테이블 방식을 쓰는 이유는, 위의 for문을 쓰면 시간 초과가 나고, set의 메서드인 has를 이용해서 계산하면 시간 초과가 나지 않기 때문(has메서드는 O(1), for문은 O(n))
//             if (setOfPhoneBook.has(startNum)) {
//                 return false;
//             }
//         }
//     }
    
//     return true
// }
// 마지막으로 푼 방식 설명
// 모든 폰 넘버를 돌면서, 각 폰 넘버를 1자리부터 전체 넘버까지 잘라서
// 각 자른 넘버들이 phone book에 존재하는지 체크하는 방식
// 예를 들어, 119에서 1, 11, 119로 잘라내면서 
// 1이 phone book에 존재하는지, 11이 존재하는지, 119가 존재하는지를 체크
// 사실, 맨 아래의 맨 처음으로 푼 방식과 기본 아이디어는 같음
// 어떻게 더 효율적인 방식을 생각하냐의 차이


// 세번째 푼 방식, phone_book 배열의 길이가 n일때, 시간 복잡도는 n^2. 여전히 시간 복잡도에서 시간초과가 뜨는 풀이
// function solution(phone_book) {
//     for (let i = 0; i < phone_book.length; i++) {
//         for (let j = 0; j < phone_book.length; j++) {
//             if (j !== i) {
//                 const editedNum = phone_book[j].slice(0, phone_book[i].length);
//                 if (editedNum === phone_book[i]) {
//                     return false;
//                 }
//             }
//         }
//     }
    
//     return true;
// }


// 두번째로 푼 방식으로, n이 phone_book 배열의 길이, m이 각 번호의 길이라고 했을때, 시간복잡도가(n^2 * m^2)로 매우 높게 나옴. 문제를 푸는 로직은 맞지만, 시간 효율성이 매우 떨어지는 방법
// function solution(phone_book) {
//     for (let i = 0; i < phone_book.length; i++) {
//         const mapOfNums = new Map();
        
//         for (let j = 0; j < phone_book[i].length; j++) {
//             mapOfNums.set(j, phone_book[i].slice(0, j + 1));
//         }
        
//         for (const [key, value] of mapOfNums) {
//             for (let k = 0; k < phone_book.length; k++) {
//                 if (k !== i && phone_book[k] === value) {
//                     return false;
//                 }
//             }
//         }
//     }
    
//     return true;
// }


// 맨 처음에 푼 방식으로, forEach의 작동 방식을 몰라서 리턴을 잘못함.
// function solution(phone_book) {
//     for (let i = 0; i < phone_book.length; i++) {
//         const mapOfNums = new Map();
        
//         for (let j = 0; j < phone_book[i].length; j++) {
//             mapOfNums.set(j, phone_book[i].slice(0, j + 1));
//         }
        
//         for (const [key, value] of mapOfNums) {
//             phone_book.forEach((number, idx) => {
//                 if (idx !== i && number === value) {
//                     // 이 리턴은 solution 함수를 정상적으로 리턴하지 않는다. 왜냐하면 forEach내에서 쓰인 리턴은 forEach의 반복만 중단할 뿐 solution 함수에는 영향을 끼치지 않음. 일반 for 문을 써야함
//                     return false;
//                 }
//             })
//         }
//     }
    
//     return true;
// }