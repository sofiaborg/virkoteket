import mongoose from "mongoose";
require("dotenv").config();

mongoose
  .connect("mongodb://localhost/virkoteket", {})
  .then(() => {
    console.log("Server running");
  })
  .catch((err) => {
    console.log(err);
  });

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect("mongodb://localhost/virkoteket");

//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (err) {
//     console.log(err);
//   }
// };

// export default connectDB;
