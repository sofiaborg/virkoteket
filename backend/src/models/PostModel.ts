import { Schema, model } from "mongoose";

interface IBooking {
  titel: String;
}

export const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
});

export const PostModel = model<IBooking>("virkoteket", PostSchema);
//krk
