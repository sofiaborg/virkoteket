import { Schema, model } from "mongoose";

interface IReview {
  grade: Number;
  comment: String;
  image: String;
}

export const ReviewSchema = new Schema({
  grade: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  users: [{ type: Schema.Types.ObjectId, ref: "Users" }],
  posts: [{ type: Schema.Types.ObjectId, ref: "Posts" }],
});

export const Reviews = model<IReview>("Reviews", ReviewSchema);
