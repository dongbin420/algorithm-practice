const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(line => line.replace(/\r/g, ''));

const orderNum = Number(input.shift());
let answer = '';

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
    this.before = null;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueueFront(item) {
    const node = new Node(item);

    if (!this.head) {
      this.tail = node;
    } else {
      this.head.before = node;
      node.next = this.head;
    }

    this.head = node;
    this.size += 1;
  }

  enqueueRear(item) {
    const node = new Node(item);

    if (!this.tail) {
      this.head = node;
    } else {
      this.tail.next = node;
      node.before = this.tail;
    }

    this.tail = node;
    this.size += 1;
  }

  dequeueFront() {
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

  dequeueRear() {
    if (this.size > 2) {
      const item = this.tail.item;
      const newTail = this.tail.before;
      this.tail = newTail;
      this.size -= 1;
      return item;
    } else if (this.size === 2) {
      const item = this.tail.item;
      const newTail = this.tail.before;
      this.head = newTail;
      this.tail = newTail;
      this.size -= 1;
      return item;
    } else if (this.size === 1) {
      const item = this.tail.item;
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

const deque = new Deque();

for (let i = 0; i < orderNum; i++) {
  const [command, num] = input[i].split(' ');

  switch (command) {
    case '1':
      deque.enqueueFront(num);
      break;
    case '2':
      deque.enqueueRear(num);
      break;
    case '3':
      answer += `${deque.dequeueFront()}\n`;
      break;
    case '4':
      answer += `${deque.dequeueRear()}\n`;
      break;
    case '5':
      answer += `${deque.getSize()}\n`;
      break;
    case '6':
      answer += `${deque.empty()}\n`;
      break;
    case '7':
      answer += `${deque.front()}\n`;
      break;
    case '8':
      answer += `${deque.back()}\n`;
      break;
    default:
      break;
  }
}

console.log(answer.trim());