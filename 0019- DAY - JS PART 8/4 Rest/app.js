function lines(str = "", i = 5) {
    console.log("-".repeat(i) + str + "-".repeat(i));
}

//Rest

{
    //Print all nums in array
    lines("Print all nums in array")
    function print_all_nums(...arr) {
        console.log("arr =", arr);
        arr.forEach(num => console.log(num));

        // for (nums of arr) {
        //     console.log(nums);
        // }
    }
    print_all_nums(1, 2, 3, 4, 5);

    
    //Calculate sum
    lines("Sum", 15);
    function sum(...nums) {
        // console.log(arguments.length);
        return nums.reduce((prev, curr) => prev + curr)
    }
    sum(1, 2, 3)


    //Find min
    lines("Find min");
    function min(...nums) {
        return nums.reduce((prev, curr) => (prev < curr ? prev : curr));
    };
    console.log(min(9, 8, 6, 3, 10));


    //Find max
    lines("Find max");
    function max(...nums) {
        return nums.reduce((prev, curr) => {
            if (prev > curr) {
                return prev;                
            } else {
                return curr;
            }
        },0);
    };
    console.log(max(1,2,3,4,5));


}

//Arguments
{
    lines("Arguments",10)
    function sum2(...args) {
        console.log("arguments :", arguments);
        console.log("arguments length :", arguments.length);
    }
    sum2(1, 2, 3, 4)
}