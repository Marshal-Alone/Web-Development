function lines(str = "", i = 30) {
    console.log("-".repeat(i) + str + "-".repeat(i));
}

//                  Q1
// Qsl . Find Square of all elements  and sum of the array elements using the arrow function and then find the
// average of the array.
{
    lines("Q1")

    let arr = [1, 2, 3, 4, 5];
    console.log("arr = ", arr);

    //Square of array
    {
        lines("Square of array", 10)

        //Method 1
        const square = arr.map(num => num * num);

        //Method 2
        function square_arr(arr) {
            return arr.map(num => num * num);
        }
        let square2 = square_arr(arr);

        //Methhod 3
        const sqaure_arr3 = (arr) => arr.map(num => num * num);
        let square3 = sqaure_arr3(arr);

        console.log(square);
        console.log(square2);
        console.log(square3);
    }

    //Sum of array
    {
        lines("Sum of array", 11)

        let sum = arr.reduce((prev, curr) => prev + curr);
        console.log("Sum :", sum);
    }

    //Average of array
    {
        lines("Average of array", 9);

        let sum = arr.reduce((prev, curr) => prev + curr);
        let avg = sum / arr.length;

        console.log("Average =", avg);
    }
}






//                  Q2
//Qs2. Create a new array using the map function whose each element is equal to the
// original element plus 5.
{
    lines("Q2")

    let org_arr = [5, 15, 25, 35, 45, 55];
    console.log("Orginal :", org_arr);

    let new_arr = org_arr.map(ele => ele + 5);
    console.log("New Arr :", new_arr);
}






//                  Q3
//Qs3. Create a new array whose elements are in uppercase of words present in the
// original array.
{
    lines("Q3")

    let str = ["adam", "bob", "catlyn", "donald", "eve"];
    console.log("Original :", str);

    //Method 1
    let capStr1 = str.map(word => word.toUpperCase());

    //Method 2
    let capStr2 = str.map(words => {
        words = words.toUpperCase();
        return words;
    })

    //Method 3 -> Capitalize only first word
    let capStr3 = str.map(word => {
        return word[0].toUpperCase() + word.slice(1);
    })



    console.log("New :", capStr1);
    console.log("New :", capStr2);
    console.log("New :", capStr3);
}






//                  Q4
//Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
// variable number of arguments. 
// The function should retum a new array with the original
// array values and all of the additional arguments doubled.
{
    lines("Q4")

    function doubleAndReturnArgs(arr, ...args) {
        let doubled_arguments = args.map(nums => nums * 2);
        let newArr = [...arr, ...doubled_arguments];
        // console.log(newArr);
        return newArr
    }

    //mam
    const doubleAndReturnArgs2 = (arr, ...args) => [...arr, ...args.map((nums) => nums * 2)];

    console.log("arr : [1,2,3,4,5]");
    console.log("variable numbers : 10,20,30,40,50");
    newArr = doubleAndReturnArgs([1, 2, 3, 4, 5], 10, 20, 30, 40, 50);

    console.log("New arr : ", newArr);
    console.log("New arr2 : ", doubleAndReturnArgs2([1, 2, 3, 4, 5], 10, 20, 30, 40, 50));
}






//                  Q5
// Qs5. Write a function called mergeObjects that accepts objects and returns a new
// object which contains all the keys and values of the first object and second object.
{
    lines("Q5")
    function mergeObjects(obj1, obj2) {
        return { ...obj1, ...obj2 };
    }
    const obj1 = {
        name1: "aman",
        marks1: 95
    }
    const obj2 = {
        name2: "shraddha",
        marks2: 100
    }

    console.log("Object 1 :", obj1);
    console.log("Object 2 :", obj2);
    console.log("New Object :", mergeObjects(obj1, obj2));


}





