const Joi = require("joi");

// Joi schema to validate listing objects submitted through forms
const listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(), // title must be a non-empty string
    description: Joi.string().required(), // description is required
    price: Joi.number().required().min(0), // price must be a non-negative number
    country: Joi.string().required(), // country is required
    location: Joi.string().required(), // location is required
    image: Joi.string().allow("", null), // image can be empty or null
  }).required(), // 'listing' object itself must exist
});

module.exports = listingSchema;

//Review Schema
const reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(1).max(5),
    comment: Joi.string().required(),
  }).required(),
});

module.exports = reviewSchema;
