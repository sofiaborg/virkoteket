import { Schema, model } from "mongoose";

interface IBooking {
  title: String;
  image: String;
  description: String;
  type: Number;
  category: Number;
  difficulty: Number;
  yarn: Number;
  hook: Number;
  space: Number;
}

export const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: Number,
    required: true,
  },
  category: {
    type: Number,
    required: true,
  },
  difficulty: {
    type: Number,
    required: true,
  },
  yarn: {
    type: Number,
    required: true,
  },
  hook: {
    type: Number,
    required: true,
  },
  space: {
    type: Number,
    required: true,
  },
  reviews: [{ type: Schema.Types.ObjectId, ref: "Reviews" }],
});

export const PostModel = model<IBooking>("Posts", PostSchema);
//krk
