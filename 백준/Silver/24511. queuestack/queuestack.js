const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(line => line.replace(/\r/g, ''));

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

const result = [];
const deque = new Deque();

const numOfstructure = Number(input[0]); // 4
const sortOfStructure = input[1].split(' '); // [0, 1, 1, 0]
const eleOfStructure = input[2].split(' '); // [1, 2, 3, 4]
const numOfInsert = Number(input[3]); // 3
const arrOfInsert = input[4].split(' '); // [2, 4, 7]

for (let i = 0; i < numOfstructure; i++) {
  if (sortOfStructure[i] === '0') deque.enqueueFront(eleOfStructure[i])
}

for (let j = 0; j < numOfInsert; j++) {
  deque.enqueueRear(arrOfInsert[j]);
  result.push(deque.dequeueFront());
}

console.log(result.join(' '));