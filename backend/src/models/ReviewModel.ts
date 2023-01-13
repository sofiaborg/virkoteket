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
  },
  comment: {
    type: String,
  },
  image: {
    type: String,
  },
  user: {
    type: String,
  },
});

export const Reviews = model<IReview>("Reviews", ReviewSchema);
