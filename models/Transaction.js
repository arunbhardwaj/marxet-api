const mongoose = require("mongoose");
const { Schema } = mongoose;

const transactionSchema = new Schema(
  {
    buyer: { type: Schema.Types.ObjectId, ref: "User" },
    seller: { type: Schema.Types.ObjectId, ref: "User" },
    product: { type: Schema.Types.ObjectId, ref: "Product" },
  },
  { timestamps: true }
);
const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
