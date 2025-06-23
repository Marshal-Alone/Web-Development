//One to Man : 3. Squillions

const mongoose = require("mongoose");
const { Schema } = mongoose;
const { model } = mongoose;

main()
  .then(() => {
    console.log("Connection successful");
  })
  .catch((e) => console.log(r));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

//User Schema
const userSchema = new Schema({
  username: String,
  email: String,
});

//Posts Schema
const postSchema = new Schema({
  content: String,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

//User model
const User = model("User", userSchema);

//Posts model
const Post = model("Post", postSchema);

//Add data
const addData = async () => {
  const user1 = new User({
    username: "Aman",
    email: "a@gmail.com",
  });

  let post1 = new Post({
    content: "Hello",
    likes: 7,
  });

  post1.user = user1;

  //   await user1.save();
  //   await post1.save();

  //post 2
  let user = await User.findOne({ username: "Aman" });
  let post2 = new Post({
    content: "Byyy",
    likes: 17,
  });

  post2.user = user;
  await post2.save();
};

// addData().then(() => console.log("Data added"));

//REtreive data
const getData = async () => {
  let res = await Post.findOne({}).populate("user", "username"); //print only username not unnecessary things
  console.log(res);
};

getData();
