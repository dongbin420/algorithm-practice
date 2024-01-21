const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

const people = Number(input[0]);
const orderNum = Number(input[1]);

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

  getSize() {
    return this.size;
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
    }

    if (this.size === 2) {
      const item = this.head.item;
      const newHead = this.head.next;
      this.head = newHead;
      this.tail = newHead;
      this.size -= 1;
      return item;
    }

    if (this.size === 1) {
      const item = this.head.item;
      this.head = null;
      this.tail = null;
      this.size -= 1;
      return item;
    }
  }
}

const queue = new Queue();
const answerArr = [];

for (let i = 1; i <= people; i++) {
  queue.push(i);
}

while (queue.getSize() > 0) {
  if (queue.getSize() > 1) {
    for (let j = 1; j < orderNum; j++) {
      queue.push(queue.pop());
    }
    answerArr.push(queue.pop());
  } 

  if (queue.getSize() === 1) {
    answerArr.push(queue.pop());
  }
}

const resultString = answerArr.join(', ');
const finalString = '<' + resultString + '>';

console.log(finalString);