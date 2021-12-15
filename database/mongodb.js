const mongoose = require("mongoose");
const { User } = require("../models/User");
const Product = require("../models/Product");
const Category = require("../models/Category");


const connectDb = () => {
  return mongoose.connect(process.env.MONGO_URL);
};

const db = mongoose.connection;

console.log("🚀 ~ file: mongodb.js ~ line 11 ~ db", db)

const models = { User, Product, Category };

module.exports = { db, connectDb, models };
