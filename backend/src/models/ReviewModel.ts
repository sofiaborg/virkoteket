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
});

export const ReviewModel = model<IReview>("Reviews", ReviewSchema);
