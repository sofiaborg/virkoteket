import { Posts } from "../../models/PostModel";
import { Request, Response } from "express";
const { ObjectId } = require("mongodb");

export const getMyPost = async (req: Request, res: Response) => {
  const id: String = ObjectId(req.params.id);
  const post = await Posts.findOne({ _id: id });
  console.log(post);
  res.send(post);
};
