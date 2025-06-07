const mongoose = require("mongoose");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

// async function connectDB() {
// 	await mongoose.connect(MONGO_URL);
// }

// connectDB()
// 	.then(() => {
// 		console.log("connected to mongo");
// 	})
// 	.catch((e) => {
// 		console.log("error connecting to mongo : " + e);
// 	});

const connectDB = async () => {
	try {
		await mongoose.connect(MONGO_URL);
		console.log("Connected to MongoDB");
	} catch (err) {
		console.error("MongoDB connection error:", err);
		process.exit(1);
	}
};

module.exports = connectDB;
