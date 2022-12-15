import { Request, Response } from "express";
const { ObjectId } = require("mongodb");
import { Posts } from "../../models/PostModel";

export const deleteMyPost = async (req: Request, res: Response) => {
  const id: String = ObjectId(req.params.id);
  await Posts.findOne({ _id: id }).deleteOne();

  res.sendStatus(200);
  console.log("deleted");
};
