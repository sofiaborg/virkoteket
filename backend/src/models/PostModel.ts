import { Schema, model } from "mongoose";

interface IPost {
  title: String;
  image: String;
  pattern: String;
  description: String;
  type: String;
  category: String;
  difficulty: String;
  yarn: String;
  hook: String;
  needle: String;
  user: String;
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
  pattern: {
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
  user: {
    type: String,
  },
});

export const Posts = model<IPost>("Posts", PostSchema);
//krk
