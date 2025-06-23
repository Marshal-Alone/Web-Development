const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;

//utils
const wrapAsync = require("./utils/wrapAsync"); // wrapper for async route handlers to catch errors
const ExpressError = require("./utils/ExpressError"); // custom error class

//ejs mate
const ejsMate = require("ejs-mate"); // layout support for EJS templates

//schema validator - JOI
const listingSchema = require("./schema"); // schema used to validate listings

const reviewSchema = require("./schema.js");

// Middleware to validate listing data before creating/updating
const validateListing = async (req, res, next) => {
  let { error } = await listingSchema.validate(req.body);

  if (error) {
    // Extract all error messages and join into one string
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg); // pass to centralized error handler
  } else {
    next(); // proceed to route handler
  }
};

const validateReview = async (req, res, next) => {
  let { error } = await reviewSchema.validate(req.body);

  if (error) {
    // Extract all error messages and join into one string
    let errMsg = error.details.map((err) => err.message).join(",");
    throw new ExpressError(400, errMsg); // pass to centralized error handler
  } else {
    next(); // proceed to route handler
  }
};

const path = require("path");
app.set("view engine", "ejs"); // set view engine to EJS
app.set("views", path.join(__dirname, "/views")); // path to views directory

app.use(express.static(path.join(__dirname, "/public"))); // serve static files
app.use(express.urlencoded({ extended: true })); // parse form data (x-www-form-urlencoded), including nested objects

//ejs mate
app.engine("ejs", ejsMate); // set up ejs-mate as template engine

//For PUT req
const methodOverride = require("method-override");
app.use(methodOverride("_method")); // allows using ?_method=PUT or DELETE in forms

//connect to mongo
const connectDB = require("./config/connectDB");
connectDB(); // initialize MongoDB connection

//get listing
const Listing = require("./models/listing");

//Routes
//R1
app.get("/", (req, res) => {
  res.send("Hello World"); // basic home route
});

//R2 : Index route of all listings
app.get(
  "/listings",
  wrapAsync(async (req, res) => {
    const all_listings = await Listing.find({}); // fetch all listings
    res.render("listings/index.ejs", { all_listings }); // render listing index page
  })
);

// R4 : Create new listing
app.get("/listings/new", (req, res) => {
  res.render("listings/new"); // render new listing form
});

//Create route
app.post(
  "/listings",
  validateListing, // validate input data with Joi
  wrapAsync(async (req, res) => {
    // method 1 : const { title, description, image, price, location, country } = req.body;

    const newListing = new Listing(req.body.listing); // create new listing instance from form data

    await newListing.save(); // save to MongoDB
    console.log("New listing saved");
    res.redirect("/listings"); // redirect to listings index
  })
);

// R3 : Show route : Show details of individual listings
//serve static file
app.get(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews"); // fetch individual listing by ID
    res.render("listings/show.ejs", { listing }); // render show page
  })
);

//R3 : Update info route
//Get edit req
app.get(
  "/listings/:id/edit",
  wrapAsync(async (req, res) => {
    if (!req.body || !req.body.listing) {
      throw new ExpressError(400, "Send valid data for listing"); // ensure form was filled
    }

    const { id } = req.params;
    const listing = await Listing.findById(id); // fetch listing to pre-fill edit form

    res.render("listings/edit", { listing }); // render edit form
  })
);

app.put(
  "/listings/:id",
  validateListing, // validate updated listing
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const updatedListing = req.body.listing;

    await Listing.findByIdAndUpdate(id, updatedListing); // update listing in DB
    res.redirect(`/listings/${id}`); // redirect to updated listing
  })
);

// R4 : Delete
app.delete(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id); // remove listing
    console.log("Listing deleted successfully : " + deletedListing);
    res.redirect("/listings"); // redirect to listings index
  })
);

//R5 : Create Review
const Review = require("./models/review.js");

app.post(
  "/listings/:id/reviews",
  validateReview,
  wrapAsync(async (req, res, next) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();
    console.log("New Review Saved : ", newReview);
    res.status(200).redirect(`/listings/${listing._id}`);
  })
);

// R6 : Delete Review
app.delete(
  "/listings/:id/reviews/:review_id",
  wrapAsync(async (req, res, next) => {
    let { id, review_id } = req.params;

    //Delete from reviews
    await Review.findByIdAndDelete(review_id);

    //Delete from listings array also
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: review_id } }); //Reviews arr se jo review review_id match ho jaye use pull karo -> delete kro
    res.redirect(`/listings/${id}`);
  })
);
//handle unknown routes
app.all(/.*/, (req, res, next) => {
  next(new ExpressError(404, "Page Not Found!!")); // catch-all for undefined routes
});

//Centralized error handler
app.use((error, req, res, next) => {
  let { status = 500, message = "Something went wrong !!" } = error;
  res.status(status).render("error.ejs", { error }); // render custom error page
});

//Start the server
app.listen(port, () => {
  console.log(`Server listening on : ${port}`); // log server start
});
