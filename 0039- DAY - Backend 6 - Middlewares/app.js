const express = require("express");
const app = express();

//Basics
app.use((req, res, next) => {
	// console.log("This is middleware");
	next();
});

// Creating utility middleware  --> Logger
app.use((req, res, next) => {
	//adding time into req
	req.time = new Date(Date.now()).toString();
	// console.log(req.method, req.hostname, req.path, req.time);
	return next();
});

app.get("/", (req, res) => {
	res.send("This is root");
});
app.get("/random", (req, res) => {
	res.send("This is random page");
});

/*
	---> API Token as Query String

	Let's create a middle-ware for an api that checks if the access token was passed in the query string or not.
*/

app.use("/api", (req, res, next) => {
	let { token } = req.query;

	if (token === "giveaccess") {
		return next();
	}
	res.send("ACCESS DENIED");
});

app.get("/api", (req, res) => {
	res.send("DATA");
});

/*
	ERROR HANDLING - BASIC
*/
app.get("/err", (req, res) => {
	a = a;
});

//404 error
app.use((req, res) => {
	res.status(404).send("Page not found");
});

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send("Something Broke");
	next();
});

app.listen(3000, () => {
	console.log("App is listening");
});
