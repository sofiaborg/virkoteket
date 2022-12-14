import { Schema, model } from "mongoose";

interface IUser {
  email: String;
  password: String;
}

export const UserSchema = new Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

export const Users = model<IUser>("Users", UserSchema);
