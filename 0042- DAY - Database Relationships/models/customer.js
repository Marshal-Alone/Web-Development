const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

// Schemas Setup

//Order Schema
const orderSchema = new mongoose.Schema({
  item: String,
  price: Number,
});
const Order = mongoose.model("Order", orderSchema);

//Add data

// const addOrders = async () => {
//   let result = await Order.insertMany([
//     { item: "Samosa", price: 15 },
//     { item: "Chips", price: 10 },
//     { item: "Chocklate", price: 20 },
//   ]);
//   console.log(result);
// };

// addOrders();

//Customer schema
const customerSchema = new mongoose.Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order", // tells Mongoose which model to reference
    },
  ],
});

const Customer = mongoose.model("Customer", customerSchema);

const addCustomer = async () => {
  let cust1 = new Customer({
    name: "Rahul",
  });

  let order1 = await Order.findOne({ item: "Chips" });
  let order2 = await Order.findOne({ item: "Chocklate" });

  cust1.orders.push(order1); // or order1._id
  cust1.orders.push(order2);

  let res = cust1.save(); // saves customer with references to orders
};

// console.log(res);

//Populate
const findCustomer = async () => {
  let res = await Customer.find({}).populate("orders");
  console.log(res[0]);
};

findCustomer();
