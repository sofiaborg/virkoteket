import { Reviews } from "./../models/ReviewModel";
import { forceAuth } from "../middlewares/forceAuth";
import { Posts } from "../models/PostModel";
import { Users } from "../models/UserModel";
const { ObjectId } = require("mongodb");
import express, { Router, Request, Response } from "express";
const router: Router = express.Router();

//get all patterns & filter them
router.get("/getposts", async (req: Request, res: Response) => {
  let query: any = {};

  if (req.query && req.query.category) {
    query = { category: req.query.category };
    console.log(query);
  }

  if (req.query && req.query.filters) {
    let filtersArr = JSON.parse(req.query.filters as string);

    const filters: { [key: string]: string } = {};

    filtersArr.forEach((filter: { title: string; option: string }) => {
      filters[filter.title] = filter.option;
    });
    query = { ...query, ...filters };
  }

  const categoryAndFilter = [query];
  console.log(categoryAndFilter);
  const posts = await Posts.find({ $and: categoryAndFilter }).lean();

  res.send(posts);
});

//get single pattern
router.get("/:id/getsinglepost", async (req: Request, res: Response) => {
  const id: String = ObjectId(req.params.id);
  const post = await Posts.findOne({ _id: id });

  res.status(200).send(post);
});

//get logged in users patterns
router.get("/:id/getuserposts", async (req: Request, res: Response) => {
  const id: String = ObjectId(req.params.id);
  Users.findOne({ _id: id })
    .populate("posts") // key to populate
    .then((user) => {
      res.send(user);
    });
});

//create review
router.post("/:id/createreview", async (req: Request, res: Response) => {
  const id: String = ObjectId(req.params.id);
  const post = await Posts.findOne({ _id: id });

  const newReview = new Reviews({
    rating: req.body.rating,
    comment: req.body.comment,
    image: req.body.image,
    user: req.body.user,
  });

  newReview.save();

  post?.reviews.push(newReview);

  post?.save();

  res.send(post);
});

export default router;
