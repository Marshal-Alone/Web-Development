// Initialize database

// Require model
const Chat = require('./models/chat');

// Setup mongoose
const mongoose = require('mongoose');

async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
        console.log("Connection Successful to MongoDB!");
        
        const all_chats = [
            {
                from: "marshal",
                to: "tony",
                msg: "Hello Mr. Stark",
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
        ];

        await Chat.insertMany(all_chats);
        console.log("Chats inserted successfully.");
    } catch (err) {
        console.error("Error occurred:", err);
    } finally {
        mongoose.connection.close();
    }
}

main();
