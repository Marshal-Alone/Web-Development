//                        Qs l
// Create a program that generates a random number representing a dice roll.
// [The number should be between 1 and 6].
// roll_die()
function roll_die() {
    let result = Math.floor(Math.random() * 6) + 1;
    console.log("Die rolled : ", result);
}




//                         Qs2.
// Create an object representing a car that stores the following properties for the car: name, model, color.
// Print the car's name.
// q2();
function q2() {
    const car = {
        name: "BMW",
        model: "XYZ1",
        color: "black"
    };
    console.log("Car name =", car.name);
}




//                          Qs3.
// Create an object Person with their name, age and city.
// Edit their city's original value to change it to "New York".
// Add a new property country and set it to the United States.
q3();
function q3() {
    const person = {
        name: "Marshal",
        age: 21,
        city: "Nagpur"
    }
    console.log("ORIGINAL :", person);

    person.city = "Mumbai";
    person.country = "USA";
    console.log("UPDATED :", person);
}