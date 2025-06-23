const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
  username: String,
  addresses: [
    {
      _id: false, // disables automatic _id generation for each address
      location: String,
      city: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

const addUser = async () => {
  let user1 = new User({
    username: "sherlock",
    addresses: [
      { location: "A", city: "Mumbai" },
      { location: "B", city: "Mumbai" },
    ],
  });

  user1.addresses.push({
    location: "B",
    city: "Delhi",
  });

  const result = await user1.save();
  console.log(result);
};

addUser();
