function solution(sides) {
    let max = 0;
    let answer;
    for(i=0; i<3; i++) {
        if (sides[i] > max) {
            max = sides[i];
        }
    }
    if (max === sides[0]) {
        if (max < sides[1] + sides[2]) {
            answer = 1;
        } else {
            answer = 2;
        }
    }
    if (max === sides[1]) {
        if (max < sides[0] + sides[2]) {
            answer = 1;
        } else {
            answer = 2;
        }
    }
    if (max === sides[2]) {
        if (max < sides[0] + sides[1]) {
            answer = 1;
        } else {
            answer = 2;
        }
    }
    return answer;
}