import express, { Router, Request, Response } from "express";
import { Posts } from "../models/PostModel";
const { ObjectId } = require("mongodb");
import { Users } from "../models/UserModel";

const router: Router = express.Router();

//MINA SIDOR
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
    console.error(error);
    res.status(500).send({ message: "Error finding user's information" });
  }
});

//OK - POST update the users information
router.post("/:id/editaccount", async (req, res) => {
  try {
    const id = ObjectId(req.params.id); // OBS - COMPARE WITH JW-TOKEN!!!
    const user = await Users.findOne({ _id: id });

    const { email, password, name, description, profilepic } = req.body;

    const updatedUserinfo = await Users.findByIdAndUpdate(
      { _id: id },
      {
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        description: req.body.description,
        profilefic: req.body.profilepic,
      }
    );
    console.log(updatedUserinfo);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error updating user's information" });
  }
});

//OK - GET a pattern from logged in user
router.get("/:id/pattern", async (req, res) => {
  try {
    const id = ObjectId(req.params.id);
    const post = await Posts.findOne({ _id: id });
    res.send(post);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error finding the post" });
  }
});

//OK - POST update/edit a pattern from logged in user
router.post("/:id/updatepattern", async (req, res) => {
  try {
    const id = ObjectId(req.params.id);
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
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error updating the post" });
  }
});

//OK - DELETE a pattern from logged in user
router.post("/:id/deletepost", async (req, res) => {
  try {
    await Posts.deleteOne({ _id: req.params.id });
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
    console.error(error);
    res.status(500).send({ message: "Error creating the post" });
  }
});

export default router;
