import { Schema, model } from "mongoose";

interface IUser {
  mail: String;
  password: String;
  image: String;
  description: String;
  // posts: [];
}

export const UserSchema = new Schema({
  mail: {
    type: String,
    required: true,
  },
  // password: {
  //   type: String,
  //   required: true,
  // },
  // image: {
  //   type: String,
  //   required: true,
  // },
  // description: {
  //   type: String,
  //   required: true,
  // },
  // posts: [{ type: Schema.Types.ObjectId, ref: "Posts" }],
});

export const UserModel = model<IUser>("Users", UserSchema);
