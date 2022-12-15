import { Schema, model } from "mongoose";

export const UserSchema = new Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

export const Users = model("Users", UserSchema);
