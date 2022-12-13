import mongoose from "mongoose";
require("dotenv").config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost/virkoteket" || "");

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
