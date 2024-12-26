//              Thread / Twitter Post
// Create an object literal for the properties of threadl/twitter post which includes -
// • username
// • content
// • likes
// • reposts
// • tags

const thread = {
    username: "@marshal",
    content: "This is my post",
    likes: 1000000,
    reposts: 100,
    tags: ["@alone", "@musk", "@person"]
};

// console.log(thread);




//               Add / Update Value
// • Change the city to "Mumbai"
// • Add a new property, gender: "Female"
// • Change the marks to A
const student = {
    name: "shraddha",
    age: 23,
    marks: 95,
    city: "Delhi"
};

student.city = "Mumbai";
student.gender = "Female";
student.marks = 'A';
delete student.city;
// console.log(student);



//              Object of Objects
const classInfo = {
    aman: {
        grade: "a",
        rollNo: 1
    },
    shraddha: {
        grade: "A",
        rollNo: 2
    },
    karan: {
        grade: "B",
        rollNo: 3
    }

};
// console.log(classInfo);


//              Array of Objects
const classArr = [
    {
        name: "Aman",
        grade: "A",
        rollNo: 1
    },
    {
        name: "Shraddha",
        grade: "A",
        rollNo: 2
    },
    {
        name: "Karan",
        grade: "B",
        rollNo: 3
    }
];
// console.log(classArr);
// classArr[0].name = "vaishali";
classArr[0].gender = "Male";
// console.log(classArr[0]["name"]);


//              Math Object
let val = Math.random()
// console.log("val = ", val);
// console.log(val * 4);
// console.log(Math.round(val * 4));
// console.log(Math.floor(val * 4));


//RANDOM NO BETN 1 TO 100
let num = Math.floor(Math.random() * 100) + 1;
// random_num(1, 5);
// function random_num(from, to) {
//     num = Math.round(Math.random() * (to - 1)) + from;
//     console.log(num);

   
// }


const Random_Num_Generator = (from, to) => {
    for (let index = 0; index < 20; index++) {
        let num = Math.floor(Math.random() * to) + from;
        console.log(num);
        if (num == 0 || num > 5) {
            console.log("BAAKA"); {
                break;
            }
        }
    }
    console.log("EXITED LOOP");
}
Random_Num_Generator(1, 5);
