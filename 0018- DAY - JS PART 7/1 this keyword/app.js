const student = {
    name: "shraddha",
    age: 23,
    eng: 95,
    math: 93,
    phy: 97,

    avg() {
        console.log(this);
        let avg = ((this.eng + this.math + this.phy) / 3);
        console.log(avg);
    }
}

function avg() {
    console.log(this);
}