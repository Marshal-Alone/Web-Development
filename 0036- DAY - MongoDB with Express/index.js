const express = require("express");
const app = express();
const path = require("path");

//require model
const Chat = require("./models/chat");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.listen(8080, () => {
	console.log("Server listening on : 8080");
});

//setup mongoose
const mongoose = require("mongoose");
const { type } = require("os");

main()
	.then(console.log("Connection Successful to MongoDB !"))
	.catch((err) => console.log(err));

async function main() {
	await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
	// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//Routes

app.get("/", (req, res) => {
	res.send("Root is working !!");
});

//show all chats
app.get("/chats", async (req, res) => {
	try {
		let chats = await Chat.find(); // get all data
		res.render("index", { chats }); // send the retrieved chats as JSON response
	} catch (error) {
		res.status(500).send("Error retrieving chats");
	}
});

//new chat
app.get("/chats/new", (req, res) => {
	res.render("new_chat");
});

//add chat to db
app.use(express.urlencoded({ extended: true }));
app.post("/chats", (req, res) => {
	let { from, to, msg } = req.body;

	let newChat = new Chat({
		from: from,
		to: to,
		msg: msg,
		created_at: new Date(),
	});

	newChat
		.save()
		.then(() => {
			res.redirect("chats");
		})
		.catch((err) => {
			res.send(err);
			console.log(err);
		});
});

//edit ->get
app.get("/chats/:id/edit", async (req, res) => {
	let { id } = req.params;
	let chat = await Chat.findById(id);
	console.log(chat);
	res.render("edit_chat", { chat });
});

//update
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.put("/chats/:id", async (req, res) => {
	let { id } = req.params;
	let { new_msg } = req.body;

	let updated_chat = await Chat.findByIdAndUpdate(id, { msg: new_msg }, { runValidators: true });

	res.redirect("/chats");
});

//Delete chat
app.delete("/chats/:id", async (req, res) => {
	let { id } = req.params;
	let deleted_chat = await Chat.findByIdAndDelete(id);
	console.log(deleted_chat);

	res.redirect("/chats");
});
