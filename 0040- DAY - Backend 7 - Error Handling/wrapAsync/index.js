const express = require("express");
const app = express();
const path = require("path");

//require model
const Chat = require("./models/chat");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));



//setup mongoose
const mongoose = require("mongoose");
const { type } = require("os");

main()
	.then(console.log("Connection Successful to MongoDB !"))
	.catch((err) => console.log(err));

async function main() {
	await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
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
app.post("/chats", async(req, res, next) => {
	try{
		let { from, to, msg } = req.body;

		let newChat = new Chat({
			from: from,
			to: to,
			msg: msg,
			created_at: new Date(),
		});

		await newChat.save()
		res.redirect("/chats")
	}catch(err){
		next(err)
	}
});



//edit ->get
app.get("/chats/:id/edit", async (req, res) => {
	try{

		let { id } = req.params;
		let chat = await Chat.findById(id);
		console.log(chat);
		res.render("edit_chat", { chat });
	}catch(err){
		next(err)
	}
});

//update
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.put("/chats/:id", async (req, res) => {
	try{

		let { id } = req.params;
		let { new_msg } = req.body;
	
		let updated_chat = await Chat.findByIdAndUpdate(id, { msg: new_msg }, { runValidators: true });
	
		res.redirect("/chats");
	}catch(err){
		next(err)
	}
});

//Delete chat
app.delete("/chats/:id", async (req, res) => {
	try{

		let { id } = req.params;
		let deleted_chat = await Chat.findByIdAndDelete(id);
		console.log(deleted_chat);
	
		res.redirect("/chats");
	}catch(err){
		next(err)
	}
});

//ASYNC WRAP
function asyncWrap(fn){
	return function(req,res,next){
		fn(req,res,next).catch(err=>next(err))
	}
}

//Show route : new
const ExpressError=require("./ExpressError")
app.get("/chats/:id",asyncWrap(
	async(req,res,next)=>{
	let {id}=req.params;
	let chat= await Chat.findById(id);

	if(!chat){
		next(new ExpressError(404,"Chat not found !!"));
	}
	res.render("show.ejs",{chat})
}
))

//Error handling middleware
app.use((err,req,res,next)=>{
	let {status=500, message="Some error occured"}=err;
	res.status(status).send(message);
})

app.listen(8080, () => {
	console.log("Server listening on : 8080");
});