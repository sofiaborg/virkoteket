import { Reviews } from "../models/ReviewModel";
import { Users } from "../models/UserModel";
import { Posts } from "../models/PostModel";
const { ObjectId } = require("mongodb");
import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

//GET all patterns including its reviews and author. OBS - this needs a lot of ifs depending on which filter/category is chosen
router.post("/:id/pattern", [], async (req: Request, res: Response) => {
  const posts = await Posts.find();
});

//GET single post from other user. use ObjectId(?)
router.post("/:id/pattern", [], async (req: Request, res: Response) => {
  try {
    const post = await Posts.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET all patterns from one user
router.get("/:id/patterns", [], async (req: Request, res: Response) => {
  const id = ObjectId(req.params.id);
  Users.findOne({ _id: id })
    .populate("posts") // key to populate
    .then((user) => {
      res.send(user);
    });
});

//POST review on pattern
router.post("/createreview", [], async (req: Request, res: Response) => {
  const newReview = new Reviews({
    grade: req.body.grade,
    comment: req.body.comment,
    image: req.body.image,
  });

  await newReview.save();
  res.send("skapad");
});

export default router;
