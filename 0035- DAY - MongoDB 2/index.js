//                              mongoose
//
const mongoose = require('mongoose');

main()
    .then((res) => {
        console.log("Connection successful");
    })
    .catch(err => console.log(err));


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}





////////////////////////////////////////////////////////////////////////////






//
//                              Schema
//
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});





////////////////////////////////////////////////////////////////////////////






// //
// //                              Models -> create document (table)
// //
const User = mongoose.model("User", userSchema);
const Employee = mongoose.model("Employee", userSchema);





////////////////////////////////////////////////////////////////////////////






//
//                              *Insert*
//

//Insert single doc
const user1 = new User({ name: "adam", email: "adam@gmail.com", age: 20 });
const user2 = new User({ name: "eve", email: "eve@gmail.com", age: 20 })

user1.save()
    .then(() => console.log("User1 added"))
    .catch((err) => console.log(err))

user2.save()
    .then(() => console.log("User2 added"))
    .catch((err) => console.log(err))



//Insert man
User.insertMany(
    [
        { name: "Tony", email: "tony@gmail.com", age: 25 },
        { name: "Peter", email: "peter@gmail.com", age: 18 },
        { name: "Steve", email: "steve@gmail.com", age: 100 }
    ]
)
    .then((data) => console.log("Users added", data))
    .catch((err) => console.log(err));




//////////////////////////////////////////////////////////////////////////





//
//                              FIND()
//

//Find all documents
User.find()
    // .then((users) => console.log(users))
    .catch(err => console.log(err));
;

//Find specific doc
User.find({ age: { $gte: 30 } })
    .then(users => { console.log(users) })
    .catch(err => { console.log(err) });
;
//Find First Occurance
User.findOne({ age: { $gte: 1 } })
    .then(user => { console.log(user) })
    .catch(err => { console.log(err) });
;
//Find By ID
User.findById('678bbaea5b7df6950fcd02f0')
    .then(user => { console.log(user) })
    .catch(err => { console.log(err) });
;



//////////////////////////////////////////////////////////////////////////




//                 UPDATE

//updateOne()
User.updateOne({ name: "Peter" }, { age: 15 })
    .then(user => { console.log(user) })
    .catch(err => { console.log(err) });
;

//updateMany()
User.updateMany({ age: { $gt: 20 } }, { age: 21 })
    .then(user => { console.log(user) })
    .catch(err => { console.log(err) });
;

// findOneAndUpdate()
User.findOneAndUpdate(
    { name: "Tony" },
    { age: 3000 },
    { new: true })      //options -> return updated doc not old

    .then(user => { console.log(user) })
    .catch(err => { console.log(err) });
;


// findOneAndUpdate()
User.findByIdAndUpdate(
    "678bbaea5b7df6950fcd02ee",
    { age: 0 },
    { new: true })      //options -> return updated doc not old

    .then(user => { console.log(user) })
    .catch(err => { console.log(err) });
;






////////////////////////////////////////////////////////////////////////////






//DELETE

//  deleteOne()
User.deleteOne({ name: "adam" })
    .then(res => { console.log(res) })
    .catch(err => { console.log(err) });
;


//deleteMany
User.deleteMany({ age: { $gte: 16 } })
    .then(res => { console.log(res) })
    .catch(err => { console.log(err) });
;


//
User.findOneAndDelete({ name: "Peter" })
    .then(user => { console.log(user) })
    .catch(err => { console.log(err) });
;






////////////////////////////////////////////////////////////////////////////


