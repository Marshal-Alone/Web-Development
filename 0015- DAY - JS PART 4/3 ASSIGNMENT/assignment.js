// Qs 1. Write a JS program to delete all occurrences of element 'num' in a given array.
// Example : if = [1, 2, 3, 4, 5, 6, 2,3] & num = 2
// Result should be arr= [1, 3, 4, 5, 6, 3]
// delAll_Occurrences()
function delAll_Occurrences() {
    let arr1 = [1, 2, 3, 4, 5, 6, 2, 3];
    let num = 2;

    // for (num of arr1) {
    //     if (num === num) {
    //         arr1.splice(num, 1);
    //     }
    // }

    arr1 = arr1.filter(element => element != num);

    console.log(arr1);
}




// Qs 2. Write a JS program to find the no of digits in a number.
// Example : if number = 287152, count = 6
// calc_sizeof_numer()
function calc_sizeof_numer() {
    let number = 287152;
    let count = number.toString().length;
    console.log(`${number} has size = ${count}`);

    // let num2 = 287152;
    // let count2 = 0;

    // while (num2 > 0) {
    //     num2 = Math.floor(num2 / 10);
    //     console.log(num2);
    //     count2++;
    //     console.log(count2);
    // }
}





// Qs3. Write a JS program to find the sum of digits in a number.
// Example : if number = 287152, sum = 25
// sum_of_num();
function sum_of_num() {
    let number = 287152;
    let sum = 0;

    // while (number > 0) {
    //     sum = sum + (number % 10);
    //     number = Math.floor(number / 10);
    // }

    numStr = number.toString();
    for (char of numStr) {
        sum += parseInt(char);
    }

    console.log("sum =", sum);
}






// Qs4. Print the factorial of a number n.
// [Factorial of a number n is the product of all positive integers less than or equal to a
// given positive integer and denoted by that integer. ]
// Example
// 7! (factorial of 7) -
// - lx2x3x4x5x6x7 = 5040
// 5! (factorial of 5) -
// - lx2x3x4x5 = 120
// 3! (factorial of 3) -
// - lx2x3 = 6
// 0! Is always 1

// factorial();
function factorial() {
    let num = 7;
    // RECURSION
    let res = factorial2(num);
    console.log(`RECURSION : ${num}! = `, res);
    function factorial2(num) {
        if (num === 0 || num === 1) {
            return 1;
        }

        return num * factorial2(num - 1)


    }

    //LOOP
    let ress = factorial3(num);
    console.log(`LOOP :${num}! = `, ress);
    function factorial3(num) {
        if (num === 0 || num === 1) {
            return 1;
        }

        let result = 1;
        for (let i = 1; i <= num; i++) {
            result = result * i;
        }
        return result;
    }

}





// Qs 5. Find the largest number in an array with only positive numbers.
// largest_in_arr();
function largest_in_arr() {
    let arr = [2, 5, 10, 4, 2, 7, 1, 9];
    let largest = 0;
    for (let num of arr) {
        if (num > largest) {
            largest = num;
        }
    }
    console.log("Largest =", largest);
}
