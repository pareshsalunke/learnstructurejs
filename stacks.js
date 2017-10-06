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
		console.log("Storage: ", this.storage);
    }

    pop() {
        
    }

    size() {
        return this.storage.split('-').length;
    }
}

let cookie = new Stack();

cookie.push("cookie1");
console.log(cookie);
console.log("===============================================");
cookie.push("cookie2");
cookie.push("cookie3");
cookie.push("cookie4");
cookie.push("cookie5");
console.log(cookie.size());