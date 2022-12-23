import { Schema, model } from "mongoose";

interface IPost {
  title: String;
  image: String;
  description: String;
  type: String;
  category: String;
  difficulty: String;
  yarn: String;
  hook: String;
  needle: String;
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
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  yarn: {
    type: String,
    required: true,
  },
  hook: {
    type: String,
  },
  needle: {
    type: String,
  },
  reviews: [{ type: Schema.Types.ObjectId, ref: "Reviews" }],
  users: [{ type: Schema.Types.ObjectId, ref: "Users" }],
});

export const Posts = model<IPost>("Posts", PostSchema);
//krk
