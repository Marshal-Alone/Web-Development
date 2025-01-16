//Connect to db
const mongoose = require('mongoose');

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon")
}

main()
    .then(() => { console.log("Connected to MongoDB") })
    .catch(err => { console.log(err) });
;





////////////////////////////////////////////////////////////////////////////




//  Define schema
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 18
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
})


//  create model (collection -> table)
const User = mongoose.model("User", userSchema)


//  create instance (insert value)
let user1 = new User({
    name: "Marshal",
    age: 18,
    email: "a@gmail.com"
})
user1.save()
    .then(res => { console.log(res) })
    .catch(err => { console.log(err) });
;






////////////////////////////////////////////////////////////////////////////





//Validation during update

//TO validate in update use -> 
User.findOneAndUpdate(
    { name: "Marshal" },
    { age: 10 },
    { runValidators: true },
    { new: true }
)
    .then(res => { console.log(res) })
    .catch(err => { console.log(err) });
;

// This will not give error
// User.findOneAndUpdate(
//     { name: "Marshal" },
//     { age: 10 },
//     { new: true }
// )
//     .then(res => { console.log(res) })
//     .catch(err => { console.log(err) });
// ;






////////////////////////////////////////////////////////////////////////////




//Custom Error msg

const bookSchema = mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        min: [0, "Negative price not allowed"]
    },
})

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
    author: "Marshal",
    price: -10
})

book1.save()
    .then(res => { console.log(res) })
    .catch(err => { console.log(err.errors.price.properties.message) });
;