const mongoose = require("mongoose");
const init_data = require("./sample_listing");
const Listing = require("../models/listing");
const connectDB = require("../config/connectDB");

connectDB();
const initDb = async () => {
	try {
		await Listing.deleteMany({});
		await Listing.insertMany(init_data.data);
		console.log("✅ DB successfully initialized");
		process.exit(0);
	} catch (err) {
		console.error("❌ Error initializing DB:", err);
		process.exit(1);
	}
};

initDb();
