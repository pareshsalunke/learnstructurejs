"use strict";

/*
STACK
Abstract data type
LIFO - Last in, first out
Collection of elements with push and pop operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.
DO NOT use an array and the native push/pop method in your implementation. That's too easy, yeah? =P
Use an object as the underlying data structure.

*** Operations:
myStack.push(value)
=> count of stack
add value to collection
myStack.pop()
=> most recent element added collection
Remove item so that it is no longer in collection
myStack.peek()
=> most recent element added collection
Similiar to pop, but do not remove element from collection
myStack.count()
=> number of elements in stack

@class Stack
params capacity
**/

class Stack {
    constructor(capacity) {
        this._capacity = capacity || Infinity;
        this._storage = {};
        this._count = 0;
    }
    
    push(item) {
        if(this._count < this._capacity) {
            this._storage[this._count++] = item;
            return this._count;
        }
        return "Max Stack capacity reached. Please remove something from stack before adding a new one."
    }

    pop() {
        if(this._count === 0) {
            return 'No element inside the stack. Add element before poping.';
        }

        let value = this._storage[--this._count];
        delete this._storage[this._count];
        return value;
    }

    peek() {
        return this._storage[this._count-1];
    }

    count() {
        return this._count;
    }
}

var myStack = new Stack(3);
console.log(myStack.push('a'), 'should be 1');
console.log(myStack.push('b'), 'should be 2');
console.log(myStack.push('c'), 'should be 3');
console.log(myStack.push('d'), 'should be Max capacity reached');
console.log(myStack.pop(), 'should be c');
console.log(myStack.count(), 'should be 2');
console.log(myStack.peek(), 'should be b');
console.log(myStack.count(), 'should be 2');