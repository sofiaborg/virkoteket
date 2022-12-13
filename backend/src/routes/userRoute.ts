import express, { Request, Response } from "express";
import { PostModel } from "../models/PostModel";

const router = express.Router();

router.post("/createpost", [], async (req: Request, res: Response) => {
  const newPost = new PostModel({
    title: req.body.title,
  });

  await newPost.save();
  res.send("skapad");
});

export default router;
