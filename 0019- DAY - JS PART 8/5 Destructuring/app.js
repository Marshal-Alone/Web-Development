
function lines(str = "", i = 5) {
    console.log("-".repeat(i) + str + "-".repeat(i));
}


let names = ["Tony", "Steve", "Peter", "Bruce"];

{
    {
        let first = names[0];   //first  -> Tony
        let second = names[1];  //second -> Steve
        let third = names[2];   //third  -> Peter
        let fourth = names[3];  //fourth -> Bruce
    }

    {
        let first, second = names;
        // first -> undefined (no value is assigned)
        // second-> ['Tony','Steve','Peter','Bruce']
    }
}

//Destrcturing Arrays
{
    lines("Destructuring Arrays", 9)

    let [first, second, third, fourth] = names;
    console.log(first);  // first   -> Tony
    console.log(second); // second  -> Steve
    console.log(third);  // third   -> Peter
    console.log(fourth); // fourth  -> Bruce

    {
        let [first, ...others] = names;
        console.log(first);
        console.log(others);
    }
}

//Destructuring Objects
{
    lines("Destructuring Objects", 9);

    const student = {
        name: "karan",
        age: 14,
        subjects: ["hindi", "english", "math", "science"],
        username: "karan@123",
        password: 'pass',
        // city:"Delhi"
    }
    console.log("student obj : ", student);

    // let pass = student.pass;
    // let class = student.pass;
    // let age = student.pass;
    // let name = student.pass;
    // let username = student.username;
    // let pass = student.pass;

    let { name, username, password, age, } = student;

    let { name: user_name, password: user_pass, city = "Mumbai" } = student;

    console.log(user_name);
    console.log(user_pass);
    console.log(city);
}








