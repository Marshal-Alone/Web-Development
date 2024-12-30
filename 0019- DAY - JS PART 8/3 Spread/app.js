function lines(str, i = 5) {
    console.log("-".repeat(i) + str + "-".repeat(i));
}

//Spread on array
{
    lines("Spread on array");
    let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(Math.max(...arr2));
    console.log(...arr2);
    console.log(arr2);

    console.log(Math.min([4, 5, 6, 1, 2]));
    console.log(Math.min(...[4, 5, 6, 1, 2]));


    console.log(..."abcdefgh");
}



//Spread on array Literals
{
    lines("Spread on array Literals", 5);
    let odd = [1, 3, 5, 7, 9];
    let even = [2, 4, 6, 8, 10];
    let nums1 = [...odd, ...even];
    let nums2 = [odd + even];
    let nums3 = [odd, even];
    console.log("[odd, even]",nums3);
    console.log("[odd + even]",nums2);
    console.log("[...odd, ...even]",nums1);

    let str = ["Hello"];
    let newStr = [...str];
    console.log(str);
    console.log(newStr);


}



//Spread on Object Lterals
{
    lines("Spread on Object Lterals");

    let data = {
        email: "ironman@starl.com",
        password: "Jarvis"
    }

    let dataCopy = { ...data, id: 1234, friend: "Steve Rogers" }
    console.log("original", data);
    console.log("Copy", dataCopy);


    //Spread array as object
    lines("Spread array as object");

    let arr = [1, 2, 3, 4, 5];
    console.log("arr =", arr);
    let obj1 = { ...arr, newKEY: "value" } //can also add new pairs
    console.log("Object =", obj1);



    //Spread strings
    lines("Spread strings");

    str = "abc";
    let obj = { ...str };
    console.log(obj);
}




