import { Reviews } from "./../models/ReviewModel";
import { forceAuth } from "../middlewares/forceAuth";
import { Posts } from "../models/PostModel";
import { Users } from "../models/UserModel";
const { ObjectId } = require("mongodb");
import express, { Router, Request, Response } from "express";
const router: Router = express.Router();

//get all patterns & filter them based on query
router.get("/getposts", async (req: Request, res: Response) => {
  try {
    let query: any = {};

    if (req.query && req.query.category) {
      query = { category: req.query.category };
    }

    let categoryAndFilter = [query];
    if (req.query && req.query.filters) {
      let filtersArr = JSON.parse(req.query.filters as string);

      filtersArr.forEach((filter: { title: string; option: string }) => {
        let filterObject: { [key: string]: string } = {};
        filterObject[filter.title] = filter.option;
        categoryAndFilter.push(filterObject);
      });
    }
    console.log(categoryAndFilter);
    const posts = await Posts.find({ $and: categoryAndFilter }).lean();
    res.status(200).send(posts);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error getting the posts" });
  }
});

// router.get("/getposts", async (req: Request, res: Response) => {
//   try {
//     let query: any = {};

//     if (req.query && req.query.category) {
//       query = { category: req.query.category };
//     }

//     if (req.query && req.query.filters) {
//       let filtersArr = JSON.parse(req.query.filters as string);

//       const filters: { [key: string]: string } = {};

//       filtersArr.forEach((filter: { title: string; option: string }) => {
//         filters[filter.title] = filter.option;
//       });
//       query = { ...query, ...filters };
//     }

//     const categoryAndFilter = [query];
//     console.log(categoryAndFilter);
//     const posts = await Posts.find({ $and: categoryAndFilter }).lean();
//     res.status(200).send(posts);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ message: "Error getting the posts" });
//   }
// });

//get single pattern
router.get("/:id/getsinglepost", async (req: Request, res: Response) => {
  try {
    const id: String = ObjectId(req.params.id);
    const post = await Posts.findOne({ _id: id });

    res.status(200).send(post);
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred while trying to get the post.");
  }
});

//get logged in users patterns
router.get("/:id/getuserposts", async (req: Request, res: Response) => {
  try {
    const id: String = ObjectId(req.params.id);
    Users.findOne({ _id: id })
      .populate("posts") // key to populate
      .then((user) => {
        res.send(user);
      });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred while trying to get the posts.");
  }
});

//create review
router.post("/:id/createreview", async (req: Request, res: Response) => {
  try {
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
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred while trying to create review.");
  }
});

export default router;
