function solution(number, k) {
  const stack = [];
  let countToRemove = k;

  for (let i = 0; i < number.length; i++) { 
    while (stack.length > 0 && countToRemove > 0 && stack[stack.length - 1] < number[i]) {
      stack.pop();
      countToRemove--;
    }

    stack.push(number[i]);
  }

  if (countToRemove !== 0) {
    for (let j = 0; j < countToRemove; j++) {
      stack.pop();
    }
  }

  return stack.join('');
}

// 한 자리의 숫자를 선택하는 시점 마다 가장 큰 숫자를 유지하려고 하는 국소적인 프로세스가
// 결국에는 모든 자리에 대해 가장 큰 수를 만들 수 있게 하므로, 국소적 최선의 선택이
// 결과의 최적해를 보장하는 그리디 문제.