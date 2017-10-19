"use strict";

class Node {

    constructor(value) {
        this.value = value;
        this.parent = null;
        this.children = [];
    }
}

class Tree {

    constructor(value) {
        let node = new Node(value);
        this._root = node;
    }
}