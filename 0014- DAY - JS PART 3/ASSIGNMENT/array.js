// Qs 1 : Write a JavaScript program to get the first n elements of an array. [n can be any positive number].
// For example: for array [7, 9, 0, -2] and n = 3
// Print, [7, 9, 0]


let arr1 = [7, 9, 0, -2];
n = 3;
let ans = arr1.slice(0, n);
// console.log(ans);

// not proper
// for (let i = 0; i < n; i++) {
//     console.log(arr1[i]);
// }



// Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any positive number].
//     For example: for array [7, 9, 0, -2] and n=3
//     Print, [9, O, -2]

let arr2 = [7, 9, 0, -2];
n = 3;
let ans2 = arr1.slice(arr1.length - n);
// console.log(ans2);

// for (let i = arr2.length - n; i < arr2.length; i++) {
//      console.log(arr2[i]);
// }



// Qs3. Write a JavaScript program to check whether a string is blank or not.

let str1 = '';
if (str1.length == 0) {
    console.log("STRING IS EMPTY");
} else {
    console.log("STRING IS NOT EMPTY");
}
// if (str1.trim() == '') {
//     // console.log('STRING IS EMPTY');
// } else {
//     // console.log('STRING IS NOT EMPTY');
// }



// Qs4. Write a JavaScript program to test whether the character at the given
// index is lower case.

let str2 = "AbCDeFGH";
let idx = 4;

if (str2[idx] === str2[idx].toLowerCase()) {
    // console.log('Lower case');
} else {
    // console.log('Upper case');
}

// for (let idx = 0; idx < str2.length; idx++) {
//     if (str2[idx]===str2[idx].toLocaleLowerCase()) {
//         console.log(idx,': Lower case');
//     } else {
//         console.log(idx,': Upper case');
//     }

// }





// Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.

let str3 = "     Marshal    ";
let new_str = str3.trim();
// console.log("Original : ",str3);
// console.log("Stripped : ",new_str);



// Qs6. Write a JavaScript program to check if an element exists in an array or not.

let arr4 = [1, 2, 3, 4, 5];
element = 55;

if (arr4.indexOf(item) != -1) {
    console.log('element exists');
} else {
    console.log('element doesnt exist');
}

// let exists;
// for (ele of arr4) {
//     if (element === ele) {
//         exists = true;
//         break;
//     } else {
//         exists = false;
//     }
// }
// if (exists) {
//     console.log(`${element} exists in array at index : ${arr4.indexOf(ele)}`);
// } else {
//     console.log(`${element} doess not exists in array`);
// }