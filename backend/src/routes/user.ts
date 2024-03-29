import express, { Router, Request, Response } from "express";
import { Posts } from "../models/PostModel";
const { ObjectId } = require("mongodb");
import { Users } from "../models/UserModel";

const router: Router = express.Router();

//My pages
//OK - GET logged in users patterns
router.get("/myposts", async (req, res) => {
  try {
    const userID = req.headers.user;
    const myPosts = await Posts.find({ user: userID });
    res.status(200).send(myPosts);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error finding user's posts" });
  }
});

//OK - GET logged in users info
router.get("/myinfo", async (req, res) => {
  try {
    const userID = ObjectId(req.headers.user);
    const myInfo = await Users.find({ _id: userID });
    res.send(myInfo);
  } catch (error) {
    res.status(500).send(error);
  }
});

//OK - DELETE a pattern from logged in user
router.post("/:id/deletepost", async (req, res) => {
  try {
    await Posts.remove({ _id: req.params.id });
    res.status(200).send(Posts);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error deleting the post" });
  }
});

//OK - POST a new pattern
router.post("/createpost", async (req, res) => {
  try {
    const userID = req.headers.user;

    const newPost = new Posts({
      title: req.body.title,
      image: req.body.image,
      pattern: req.body.pattern,
      description: req.body.description,
      type: req.body.type,
      category: req.body.category,
      difficulty: req.body.difficulty,
      yarn: req.body.yarn,
      hook: req.body.hook,
      needle: req.body.needle,
      user: userID,
    });

    await newPost.save();
    res.status(200).send(newPost);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
