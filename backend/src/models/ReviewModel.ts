import { Schema, model } from "mongoose";

export interface IReview {
  rating: Number;
  comment: String;
  image: String;
  user: String;
}

export const ReviewSchema = new Schema({
  rating: {
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
  user: {
    type: String,
    required: true,
  },
});

export const Reviews = model<IReview>("Reviews", ReviewSchema);
