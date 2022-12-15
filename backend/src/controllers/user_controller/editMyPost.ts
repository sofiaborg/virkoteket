import { Request, Response } from "express";
const { ObjectId } = require("mongodb");
import { Posts } from "../../models/PostModel";

export const editMyPost = async (req: Request, res: Response) => {
  const id: String = ObjectId(req.params.id);
  const post = await Posts.findOne({ _id: id });
  const {
    title,
    image,
    description,
    type,
    category,
    difficulty,
    yarn,
    hook,
    space,
  } = req.body;

  const updatedPost = await Posts.findByIdAndUpdate(
    { _id: id },
    {
      title: req.body.title,
      image: req.body.image,
      description: req.body.description,
      type: req.body.type,
      category: req.body.category,
      difficulty: req.body.difficulty,
      yarn: req.body.yarn,
      hook: req.body.hook,
      space: req.body.space,
    }
  );

  console.log(updatedPost);
  res.send(updatedPost);
};
