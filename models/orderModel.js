import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  products: [
    {
      type: mongoose.ObjectId,
      ref: "Products",
    },
  ],
  payment: {},
  buyer:{
    type: mongoose.ObjectId,
    ref: "Users"
  },
  status: {
    type: String,
    default: "Not Proccesed",
    enum:["Not Proccessed", 'Processing', "Shipped", "Delivered", "Canceled"]
  }
}, {timestamps: true});

export default mongoose.model("Order", orderSchema);
