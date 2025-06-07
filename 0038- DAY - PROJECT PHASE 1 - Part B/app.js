const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;

//ejs mate
const ejsMate = require("ejs-mate");

const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));

//ejs mate
app.engine("ejs", ejsMate);

//For PUT req
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
//connect to mongo
const connectDB = require("./config/connectDB");
connectDB();

//get listing
const Listing = require("./models/listing");

//Routes
//R1
app.get("/", (req, res) => {
	res.send("Hello World");
});

//R2 : Index route of all listings
app.get("/listings", async (req, res) => {
	const all_listings = await Listing.find({});
	res.render("listings/index.ejs", { all_listings });
});

// R4 : Create new listing
app.get("/listings/new", (req, res) => {
	res.render("listings/new");
});

//Create route
app.post("/listings", async (req, res) => {
	// method 1 : const { title, description, image, price, location, country } = req.body;
	//method 2
	let listing = req.body.listing;

	const newListing = new Listing(req.body.listing);
	try {
		await newListing.save();
		console.log("New listing saved");
		res.redirect("/listings");
	} catch (e) {
		console.log("Error saving listing : " + e);
	}
});

// R3 : Show route : Show details of individual listings
//serve static file

app.get("/listings/:id", async (req, res) => {
	const { id } = req.params;
	const listing = await Listing.findById(id);
	res.render("listings/show.ejs", { listing });
});

//R3 : Update info route
//Get edit req
app.get("/listings/:id/edit", async (req, res) => {
	const { id } = req.params;
	const listing = await Listing.findById(id);

	res.render("listings/edit", { listing });
});

app.put("/listings/:id", async (req, res) => {
	const { id } = req.params;
	const updatedListing = req.body.listing;

	try {
		await Listing.findByIdAndUpdate(id, updatedListing);
		res.redirect(`/listings/${id}`);
	} catch (e) {
		console.log(e);
	}
});

// R4 : Delete
app.delete("/listings/:id", async (req, res) => {
	const { id } = req.params;
	try {
		let deletedListing = await Listing.findByIdAndDelete(id);
		console.log("Listing deleted successfully : " + deletedListing);
		res.redirect("/listings");
	} catch (e) {
		console.log(e);
	}
});

//Start the server
app.listen(port, () => {
	console.log(`Server listening on : ${port}`);
});
