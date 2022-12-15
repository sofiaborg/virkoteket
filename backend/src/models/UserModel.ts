import { Schema, model, Document } from "mongoose";
import bcrypt from "bcrypt";

export interface I_UserDocument extends Document {
  email: string;
  password: string;
  name: string;
  description: string;
  profilepic: string;
}

export const UserSchema: Schema<I_UserDocument> = new Schema({
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

const saltRounds = 8;

UserSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, saltRounds);
  }
  next();
});

export const Users = model<I_UserDocument>("Users", UserSchema);
