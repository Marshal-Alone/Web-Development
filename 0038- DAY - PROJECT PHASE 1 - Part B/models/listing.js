// Importing mongoose package
const mongoose = require("mongoose");

// Getting the Schema constructor from mongoose
const Schema = mongoose.Schema;

// Creating a new schema for Listings
const listingSchema = new Schema({
	title: {
		type: String,
		required: true, // title is mandatory
	},
	description: {
		type: String,
		required: true, // description is mandatory
	},
	image: {
		// image field is an object that stores two pieces of information

		url: {
			type: String,
			default:
				"https://media.gettyimages.com/id/1552706967/photo/a-sunset-view-of-a-paris-townhouses.jpg?s=612x612&w=0&k=20&c=vqKieLbKp2cWTIumtzLq_QZmbRH9rNuMFN_fiO1-geU=",
		},
		filename: String,
	},
	price: {
		type: Number,
		// required: true,
	},
	location: {
		type: String,
		// required: true,
	},
	country: {
		type: String,
		// required: true,
	},
});

// Creating the Listing model using the schema
const Listing = mongoose.model("Listing", listingSchema);

// Exporting the model so we can use it in other files
module.exports = Listing;
