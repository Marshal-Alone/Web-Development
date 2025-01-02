
//console -> sources -> app.js -> add breakpoint

function one() {
    return 1;                //1
}
function two() {
    return one() + one();    //2
}
function three() {
    let sum = two() + one(); //3
    console.log(sum);
}

three();    //3