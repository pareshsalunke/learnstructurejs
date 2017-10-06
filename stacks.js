/**
 * 
 * 
 * @class Stack
 * Stack which takes stores values in string format with separator instead of array
 */
class Stack {
    constructor() {
        this.storage = "";
    }

    push(value) {
		
        if (this.storage.length === 0) {
            this.storage += value;
        } else {
            this.storage += "-" + value;
        }
		
    }

    pop() {
        let lastDelimiter = this.storage.lastIndexOf('-');
        let poppedItem = this.storage.slice(lastDelimiter+1);

        console.log("Popped Item", poppedItem);
        this.storage = this.storage.substring(0, lastDelimiter);
        console.log("Storage: ", this.storage);
        return poppedItem;
    }

    size() {
        return this.storage.split('-').length;
    }
}

let cookie = new Stack();

cookie.push("cookie1");
console.log(cookie);
console.log("=======================Let's push things========================");
cookie.push("cookie2");
cookie.push("cookie3");
cookie.push("cookie4");
cookie.push("cookie5");
console.log(cookie.size());
console.log("=======================Let's pop things======================");
cookie.pop();
cookie.pop();