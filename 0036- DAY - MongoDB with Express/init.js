//Initialize database


//require model
const Chat = require('./models/chat');

//setup mongoose
const mongoose = require('mongoose');
const { type } = require('os');

main()
    .then(console.log("Connection Successful to MongoDB !"))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


let all_chats = [
    {
        from: "marshal",
        to: "tony",
        msg: "Hello Mr.Stark",
        created_at: new Date()
    },
    {
        from: "tony",
        to: "marshal",
        msg: "Hello Marshal",
        created_at: new Date()
    },
    {
        from: "bruce",
        to: "clark",
        msg: "Hey Clark, how's it going?",
        created_at: new Date()
    },
    {
        from: "clark",
        to: "bruce",
        msg: "All good, Bruce. How about you?",
        created_at: new Date()
    }
]

Chat.insertMany(all_chats)
    .then(console.log("Chats inserted"))
    .catch(err => { console.log(err) })
