import express, { Request, Response } from "express";
import { PostModel } from "../models/PostModel";
const UserModel = require("././../models/UserModel.ts");
import { ReviewModel } from "../models/ReviewModel";

const router = express.Router();

router.post("/createuser", [], async (req: Request, res: Response) => {
  const newUser = new UserModel({
    mail: req.body.mail,
  });

  await newUser.save();
  res.send("skapat ny user");
});

router.post("/createpost", [], async (req: Request, res: Response) => {
  const newPost = new PostModel({
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
  res.send("skapad");
});

router.post("/createreview", [], async (req: Request, res: Response) => {
  const newReview = new ReviewModel({
    grade: req.body.title,
    comment: req.body.title,
    image: req.body.title,
  });

  await newReview.save();
  res.send("skapat ny review");
});

export default router;
