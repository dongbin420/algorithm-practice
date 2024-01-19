const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(line => line.replace(/\r/g, ''));

const commandTime = Number(input.shift());

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(item) {
    const node = new Node(item);

    if (!this.head) {
      this.head = node;
      this.head.next = this.tail;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.size += 1;
  }

  getSize() {
    return this.size;
  }

  pop() {
    if (this.size > 2) {
      const item = this.head.item;
      const newHead = this.head.next;
      this.head = newHead;
      this.size -= 1;
      return item;
    } else if (this.size === 2) {
      const item = this.head.item;
      const newHead = this.head.next;
      this.head = newHead;
      this.tail = newHead;
      this.size -= 1;
      return item;
    } else if (this.size === 1) {
      const item = this.head.item;
      this.head = null;
      this.tail = null;
      this.size -= 1;
      return item;
    } else {
      return -1;
    }
  }

  empty() {
    return this.size ? 0 : 1;
  }

  front() {
    return this.head ? this.head.item : -1;
  }

  back() {
    return this.tail ? this.tail.item : -1;
  }
}

function solution(n, commands) {
  const queue = new Queue();
  let answer = '';

  for (let i = 0; i < n; i++) {
    const [command, num] = commands[i].split(' ');
  
    switch (command) {
      case 'push':
        queue.push(Number(num));
        break;
      case 'pop':
        answer += `${queue.pop()}\n`;
        break;
      case 'size':
        answer += `${queue.getSize()}\n`;
        break;
      case 'empty':
        answer += `${queue.empty()}\n`;
        break;
      case 'front':
        answer += `${queue.front()}\n`;
        break;
      case 'back':
        answer += `${queue.back()}\n`;
        break;
      default:
        break;
        // 무조건 일치하는게 있는 경우엔 default 생략 가능
    }
  }

  return answer.trim();
}

const answer = solution(commandTime, input);
console.log(answer);
