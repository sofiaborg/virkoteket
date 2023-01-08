import { Reviews } from "./../models/ReviewModel";
import { forceAuth } from "../middlewares/forceAuth";
import { Posts } from "../models/PostModel";
import { Users } from "../models/UserModel";
const { ObjectId } = require("mongodb");
import express, { Router, Request, Response } from "express";
const router: Router = express.Router();

//hämta alla inlägg
router.get("/getposts", async (req: Request, res: Response) => {
  let query: any = {};

  if (req.query && req.query.category) {
    query = { category: req.query.category };
    console.log(query);
  }

  if (req.query && req.query.filters) {
    let filtersArr = JSON.parse(req.query.filters as string);

    const query: { [key: string]: string } = {};

    filtersArr.forEach((filter: { title: string; option: string }) => {
      query[filter.title] = filter.option;
      console.log(query);
    });
  }

  const posts = await Posts.find(query).lean();

  res.send(posts);

  // for (const filter of filtersArr) {
  //   const { title, option } = filter;
  //   console.log(title, option);
  // }

  // const filterToString = JSON.stringify(req.query.filters);
  // console.log(filterToString);
  // let filters = JSON.parse(decodeURIComponent(filterToString));
  // console.log(filters);
  // for (const key in filters) {
  //   filters[key] = { $in: filters[key] };
  // }

  // let category = {};
  // let filters = {};

  // if (req.query.category) {
  //   category = { category: req.query.category };
  // }

  // if (req.query.filters) {
  //   const filterToString = JSON.stringify(req.query.filters);
  //   let filters = JSON.parse(decodeURIComponent(filterToString));
  //   filters = Object.assign(filters, { filters: req.query.filters });
  // }

  // const posts = await Posts.find(category).lean();
  // console.log(posts);

  // res.send(posts);
});

//hämta ett inlägg
router.get("/:id/getsinglepost", async (req: Request, res: Response) => {
  const id: String = ObjectId(req.params.id);
  const post = await Posts.findOne({ _id: id });

  res.status(200).send(post);
});

//hämta inloggad användares inlägg
router.get("/:id/getuserposts", async (req: Request, res: Response) => {
  const id: String = ObjectId(req.params.id);
  Users.findOne({ _id: id })
    .populate("posts") // key to populate
    .then((user) => {
      res.send(user);
    });
});

//skapa rescencion
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
