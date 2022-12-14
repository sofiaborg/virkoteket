import { Schema, model } from "mongoose";

interface IUser {
  email: String;
  password: String;
}

export const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const Users = model<IUser>("Users", UserSchema);
