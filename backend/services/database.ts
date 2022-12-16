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
