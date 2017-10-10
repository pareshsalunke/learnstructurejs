"use strict"; 
/*
QUEUE
Abstract data type
FIFO - First in, first out
Collection of elements with enqueue and dequeue operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.
DO NOT use an array and the native push/shift method in your implementation. Use an object as the underlying data structure.
*** Operations:
myQueue.enqueue(value)
=> count of queue
add value to collection
myQueue.dequeue()
=> oldest element added collection
Remove item so that it is no longer in collection
myQueue.peek()
=> oldest element added collection
Similiar to dequeue, but do not remove element from collection
myQueue.count()
=> number of elements in queue


*** Additional Exercises:
Modify your queue to take a max capacity and return a string if you try to add an element when there's no more room:
myQueue.enqueue(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the queue:
myQueue.contains('findme')
=> true/false
What's the time complexity?
eCreate an until method to get the number of dequeues until you get to a certain value:
queue values - (first)2-5-7-3-6-9(last)
myQueue.until(7)
=> 3
What's the time complexity?
**
**
@class Queue
@params capacity
 **/


class Queue {

    constructor(capacity) {
        this._capacity = capacity || Infinity;
        this._storage = {};
        this._head = 0;
        this._tail = 0;
    }

    enqueue(item) {
        if(this._tail < this._capacity) {
            this._storage[this._tail++] = item;
            return this.count();
        }
        return "Max capacity already reached. Remove element before adding a new one.";
    }

    dequeue() {
        let el = this._storage[this._head];
        delete this._storage[this._head];
        if(this._head < this._tail) {
            this._head++;
        }
        return el;
    }
    
    count() {
        return this._tail - this._head;
    }
    
    peek() {
        return this._storage[this._head];
    }

    contains(value) {
        for(let i=this._head;i< this._tail; i++) {
            if(this._storage[i] === value) {
                return true;
            }
        }
        return false;
    }

    until(value) {
        for(let i=this._head; i<this._tail; i++) {
            if(this._storage[i] === value) {
                return i - this._head+1;
            }
        }
        return null;
    }
}

var myQueue = new Queue(3);
console.log(myQueue.enqueue('a'), 'should be 1');
console.log(myQueue.enqueue('b'), 'should be 2');
console.log(myQueue.enqueue('c'), 'should be 3');
console.log(myQueue.enqueue('d'), 'should be Max capacity reached');
console.log(myQueue.dequeue(), 'should be a');
console.log(myQueue.count(), 'should be 2');
console.log(myQueue.peek(), 'should be b');
console.log(myQueue.count(), 'should be 2');
console.log(myQueue.contains('b'), 'should be true');
console.log(myQueue.contains('d'), 'should be false');
console.log(myQueue._storage, myQueue._head);
console.log("Head: ", myQueue._head + "*** Tail: " + myQueue._tail);
console.log(myQueue.until('b'), 'should be 1');
console.log(myQueue.until('c'), 'should be 2');
console.log(myQueue.until('d'), 'should be null');