const express = require("express");
const app = express();

const port = 8080;
const path = require("path");

// Set EJS as the view engine
app.set("view engine", "ejs");

//set vies directory
app.set("views", path.join(__dirname, "/views"));

//create routes
app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/rolldice", (req, res) => {
  let dice_val = Math.floor(Math.random() * 6) + 1;
  let object = { val: dice_val };
  res.render("rolldice.ejs", { dice_val });
});

app.get("/profile", (req, res) => {
  const data = {
    name: "Marshal",
    age: 21,
  };
  res.render("profile", data);
});

//Instagram EJS
app.get("/instagram/:username", (req, res) => {
  let { username } = req.params;

  const followers = ["adam", "bob", "steve", "eve", "chandler"];

  res.render("instagram", { username, followers });
});

//Instagram EJS with json
app.get("/ig/:username", (req, res) => {
  //send data acc to username
  let { username } = req.params;

  const insta_data = require("./data.json");
  let data = insta_data[username];

  //if user exist
  if(data){
    res.render("ig", { data });
  }else{
    //if user doesnt  exists
    res.send("User not found !!!")
  }

});


//Serving Static files -> csss,js in ig.ejs
app.use(express.static(path.join(__dirname,'public/css')));
app.use(express.static(path.join(__dirname,'public/js')));

//Start the server
app.listen(port, () => {
  console.log("Listening on port :", port);
});
