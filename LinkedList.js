"use strict";

/*
LINKED LIST
Comprised of nodes that represent a sequence.
Each node is composed of data and a reference/link to the next node.
*** Operations:
** Part 1
myList.forEach(callbackFn)
invoke callback function with the value of each node
myList.print()
=> string with all values in list (ex: '0, 1, 2, 3')
myList.insertAfter(refNode, value)
=> new node
insert new node associated with value passed in after refNode
myList.removeAfter(refNode)
=> removed node
remove node after the refNode
myList.insertHead(value)
=> new head
insert new head node at the beginning of the list with the value passed in
myList.removeHead()
=> removed head node
remove the head node of the linked list
myList.findNode(value)
=> first node that has a value matching what was passed in
* Optimization:
Say we have a linked list that has 100 items and we want to add an item to the very end. How would you do that with your current implementation? How can you modify the data structure to add an item to the end in constant time?
myList.appendToTail(value)
=> tail node
add a new tail node at the end of the list with the associated value passed in
myList.removeTail()
=> removed tail node
remove the tail node from the list
** Part 2
Now let's think about creating insertBefore and removeBefore methods for the nodes in our list. Can you think of an efficient way to do so?
Think about time complexity. What would it be for your current implementation of a linked list?
How can we modify our data structures (Node and Linked List classes) so that we can make these O(1) operations?
Once you've come up with a plan, implement the following methods.
myList.insertBefore(refNode, value)
=> new node inserted
insert new node with associated value before refNode
myList.removeBefore(refNode)
=> removed node
remove node before the refNode passed in
*SOLUTION: See doublyLinkedList.js file*
*** Extra Credit:
Implement a circularly linked list:
https://en.wikipedia.org/wiki/Linked_list#Circularly_linked_list
Reimplement stack and queue data structures using linked lists.
 */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(headValue) {
        if(headValue === undefined) {
            console.log('Must provide value for first node');
        }
        this.head = new Node(headValue);
        this.tail = this.head;
    }

    forEach(callback) {
        let node = this.head;
        while(node) {
            callback(node.value);
            node = node.next;
        }
    }

    print() {
        let result = [];
        this.forEach((value) => {
            result.push(value);
        });
        return result.join(', ');
    }

    insertAfter(node, value) {
        // get reference to former next
        var oldNext = node.next;
        // create new node
        var newNext = new Node(value);
        // store it as the new next
        node.next = newNext;
        // set next for the new node to be the old next
        newNext.next = oldNext;
        // if reference node is tail, set tail to newNext
        if (this.tail === node) this.tail = newNext;
        return newNext;
    }

    removeAfter(node) {
        // store reference to removed node
        let removedNode = node.next;

        // if node is tail, then there's nothing to remove
        if (!removedNode) return "Nothing to remove";
        //get reference to new reference after removed node
        let newNext = removedNode.next;
        // set newNext as the next node
        node.next = newNext;
        // remove reference from removed node to linked list
        removedNode.next = null;
        //update tail if removed Node was last node in LL
        if(removedNode === this.tail) this.tail = node;
        return removedNode;
    }

    insertHead (value) {
        // create new Head node
        let newHead = new Node(value);
        //link new head to old head
        newHead.next = this.head;
        // update head to new head
        this.head = newHead; 
        return newHead; 
    }

    removeHead() {
        let removedHead = this.head;
        let newHead = removedHead.next;
        this.head = newHead;
        removedHead.next = null;
        return removedHead;
    }

    findNode(value) {
        let node = this.head;

        while(node) {
            if(node.value === value) {
                return node;
            }
            node = node.next;
        }
        return 'No node with value: ' + value + ' found.';
    }

    appendToTail(value) {
        // create node to append to tail
        let newNode = new Node(value);
        //old tail reference 
        let oldTail = this.tail;
        // Link old tail to new node to append
        oldTail.next = newNode;
        // Update tail to new Node
        this.tail = newNode;
        return newNode;
    }

}

var myList = new LinkedList(0);

console.log(myList.print(), 'should be 0');
console.log(myList.insertAfter(myList.head, 1), 'should be 1');
console.log(myList.print(), 'should be 0, 1');
console.log(myList.insertAfter(myList.head.next, 3), 'should be 3');
console.log(myList.print(), 'should be 0, 1, 3');
console.log(myList.insertAfter(myList.head.next, 2), 'should be 2');
console.log(myList.print(), 'should be 0, 1, 2, 3');
console.log(myList.removeAfter(myList.head), 'should be 1');
console.log(myList.print(), 'should be 0, 2, 3');
console.log(myList.insertHead(-1), 'should be -1');
console.log(myList.print(), 'should be -1, 0, 2, 3');
console.log(myList.removeHead(), 'should be -1');
console.log(myList.print(), 'should be 0, 2, 3');
console.log(myList.appendToTail(4), 'should be 4');
console.log(myList.print(), 'should be 0, 2, 3, 4');
console.log(myList.findNode(0) === myList.head, 'should be true');
console.log(myList.findNode(3) === myList.head.next.next, 'should be true');
myList.insertAfter(myList.findNode(2), 2.5);
console.log(myList.print(), 'should be 0, 2, 2.5, 3, 4');
myList.removeAfter(myList.findNode(2));
console.log(myList.print(), 'should be 0, 2, 3, 4');