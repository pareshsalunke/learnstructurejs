"use strict";

const Stack = require('./Stacks');
// import Stack from './Stacks.js';

class Q2Stack {
    constructor(capacity) {
        this._stackIn = new Stack(capacity);
        this._stackOut = new Stack(capacity);
    }

    enqueue(value) {
        this._stackIn.push(value);
    }

    dequeue() {
        if(this._stackOut.count() === 0) this._transferStacks();
        return this._stackOut.pop();
    }

    _transferStacks() {
        while(this._stackIn.count() > 0) {
            this._stackOut.push(this._stackIn.pop());
        }
    }

    count() {
        return this._stackIn.count() + this._stackOut.count();
    }

    peek() {
        if(this._stackOut.count() === 0) return this._transferStacks();
        return this._stackOut.peek()
    }

    printS() {
        console.log(this._stackIn);
    }
}

var myQueue = new Q2Stack(4);

console.log(myQueue.enqueue('a'), 'should be 1');
console.log(myQueue.enqueue('b'), 'should be 2');
console.log(myQueue.enqueue('c'), 'should be 3');
console.log(myQueue.enqueue('d'), 'should be Max capacity reached');
console.log(myQueue.dequeue(), 'should be a');
console.log(myQueue.count(), 'should be 2');
console.log(myQueue.peek(), 'should be b');
console.log(myQueue.count(), 'should be 2');