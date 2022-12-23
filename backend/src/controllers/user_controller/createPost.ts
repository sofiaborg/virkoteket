import { Request, Response } from "express";
const { ObjectId } = require("mongodb");
import { Posts } from "../../models/PostModel";

export const createPost = async (req: Request, res: Response) => {
  const newPost = new Posts({
    title: req.body.title,
    image: req.body.image,
    description: req.body.description,
    type: req.body.type,
    category: req.body.category,
    difficulty: req.body.difficulty,
    yarn: req.body.yarn,
    hook: req.body.hook,
    space: req.body.space,
  });

  await newPost.save();
  res.send(newPost);
};
