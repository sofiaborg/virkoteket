import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

export interface IUser {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  description: string;
  profilepic: string;
}

export const UserSchema: Schema<IUser> = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
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

export const Users = model<IUser>("Users", UserSchema);
