import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  mail: {
    type: String,
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

const UserModel = mongoose.model("Users", UserSchema);

module.exports = UserModel;
