const express = require("express");
const app = express();

//require cusom error
const ExpressError = require("./ExpressError");

app.get("/", (req, res) => {
	res.send("This is root");
});

app.get("/random", (req, res) => {
	res.send("This is random page");
});

app.get("/err", (req, res) => {
	a = a;
});

//check token
const chechToken = (req, res, next) => {
	let { token } = req.query;
	if (token === "giveaccess") {
		return next();
	}
	throw new ExpressError(401, "ACCESS DENIED");
};
app.get("/api", chechToken, (req, res) => {
	res.send("ACCESS GRANTED");
});

//activity
const AdminError = require("./AdminError");
app.get("/admin", (req, res) => {
	throw new AdminError(403, "Access to admin is forbidden");
});

app.use((err, req, res, next) => {
	let { status = 500, message = "Some error occured" } = err;
	res.status(status).send(message);
});

app.listen(3000, () => {
	console.log("App is listening ...");
});
