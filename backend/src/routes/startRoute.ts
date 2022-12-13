import { Reviews } from "./../models/ReviewModel";
import { Users } from "../models/UserModel";
const { ObjectId } = require("mongodb");
import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

//GET. start-page: get all patterns in PostModel including its reviews and author. OBS - this needs a lot of ifs depending on which filter/category is chosen

//GET. show single pattern-page: get single pattern with ObjectId(?)

//POST - when user add review on a pattern
router.post("/createreview", [], async (req: Request, res: Response) => {
  const newReview = new Reviews({
    grade: req.body.grade,
    comment: req.body.comment,
    image: req.body.image,
  });

  await newReview.save();
  res.send("skapad");
});

//GET. klick on pattern-author: get all patterns from that autor

router.get("/hej", [], async (req: Request, res: Response) => {
  const id = ObjectId(req.params.id);
  Users.findOne({ _id: id })
    .populate("posts") // key to populate
    .then((user) => {
      res.send(user);
    });
});

export default router;
