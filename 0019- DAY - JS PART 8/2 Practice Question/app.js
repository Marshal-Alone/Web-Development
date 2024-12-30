//                  Q1
//Check if all numbers in our array are multiples of 10 or not.
{
    arr = [10, 20, 30, 40, 55];
    let res = arr.every((num) => (num % 10 == 0));
    if (res) {
        console.log("All numbers are divisible by 10");
    } else {
        console.log("All numbers are NOT divisible by 10");
    }

    // let check = (arr) => {
    //     let res = arr.every((num) => (num % 10 == 0));

    //     if (res) {
    //         console.log("All numbers are divisible by 10");
    //     } else {
    //         console.log("All numbers are NOT divisible by 10");
    //     }
    // }

    // check(arr)
}






//                  Q2
//Create a function to find the min number in an array.

{
    const min = (arr) => {
        const min = arr.reduce((prev, curr) => (prev < curr ? prev : curr));
        console.log("min =", min);
        return min;
    }

    min([10, 20, 30, 4, 5, 6]);
}

function pr(...nums) {
    console.log(nums);
}
pr(1,2,3,4,5)