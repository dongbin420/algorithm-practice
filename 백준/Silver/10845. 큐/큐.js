const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => line.replace(/\r/g, ''));

const N = Number(input.shift());

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

  getSize() {
    return this.size;
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

const queue = new Queue();
const answer = [];

for (let i = 0; i < N; i++) {
  const [command, num] = input[i].split(' ').map((ele, idx) => idx === 1 ? Number(ele): ele);

  switch (command) {
    case 'push':
      queue.push(num);
      break;
    case 'pop':
      answer.push(queue.pop());
      break;
    case 'size':
      answer.push(queue.getSize());
      break;
    case 'empty':
      answer.push(queue.empty());
      break;
    case 'front':
      answer.push(queue.front());
      break;
    case 'back':
      answer.push(queue.back());
      break;
    default:
      break;
  }
}

console.log(answer.join('\n'));