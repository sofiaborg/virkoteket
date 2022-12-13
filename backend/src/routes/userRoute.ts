import express, { Request, Response } from "express";
import { PostModel } from "../models/PostModel";
import { UserModel } from "../models/UserModel";
import { ReviewModel } from "../models/ReviewModel";

const router = express.Router();

router.post("/createuser", [], async (req: Request, res: Response) => {
  const newUser = new UserModel({
    mail: req.body.title,
  });

  await newUser.save();
  res.send("skapat ny user");
});

router.post("/createpost", [], async (req: Request, res: Response) => {
  const newPost = new PostModel({
    title: req.body.title,
    image: req.body.title,
    description: req.body.title,
    type: req.body.title,
    category: req.body.title,
    difficulty: req.body.title,
    yarn: req.body.title,
    hook: req.body.title,
    space: req.body.title,
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
