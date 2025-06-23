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

// ✅ Attach middleware FIRST
customerSchema.pre("findOneAndDelete", async () => {
  console.log("PRE middleware");
});

customerSchema.post("findOneAndDelete", async (customer) => {
  console.log("---------POST----------");
  if (customer.orders.length) {
    let res = await Order.deleteMany({ _id: { $in: customer.orders } });
    console.log(res);
  }
});

// ✅ THEN compile the model
const Customer = mongoose.model("Customer", customerSchema);
const Order = mongoose.model("Order", orderSchema);

//Add Customer
const addCustomer = async () => {
  let cust1 = new Customer({
    name: "Rahul",
  });

  let ord1 = new Order({ item: "Samosa", price: 250 }); // ✅ creates a new order document
  let ord2 = new Order({ item: "Chips", price: 250 }); // ✅ creates a new order document
  let ord3 = new Order({ item: "Chocklate", price: 250 }); // ✅ creates a new order document

  cust1.orders.push(ord1); // ✅ pushes the entire Order *document* (not just ObjectId) into customer's orders array
  cust1.orders.push(ord2);
  cust1.orders.push(ord3);
  await ord1.save(); // ✅ saves the order into the 'orders' collection in MongoDB
  await cust1.save(); // ✅ saves the customer document into the 'customers' collection

  console.log("Added");
};
// addCustomer();

//Populate
const findCustomer = async () => {
  let res = await Customer.find({}).populate("orders");
  console.log(res[0]);
};

// findCustomer();

//Delete
const delCust = async () => {
  let data = await Customer.findByIdAndDelete("6853d3cf9a919f1a6567110d");
  console.log(data);
};

delCust();
