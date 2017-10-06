class Yurt {
    constructor(ribs) {
        this.ribs = ribs;
    }

    countRibs() {
        if(this.ribs > 10) {
            console.log("YUM!!");
        } else {
            console.log("MOREEEEE!!");
        }
    }
}

let parryHouse = new Yurt(50);

parryHouse.countRibs();