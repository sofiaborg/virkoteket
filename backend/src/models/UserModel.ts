import { Schema, model } from "mongoose";

export const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  profilepic: {
    type: String,
    default: "",
  },
});

export const Users = model("Users", UserSchema);
