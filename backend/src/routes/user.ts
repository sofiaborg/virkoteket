import express, { Router, Request, Response } from "express";
import { Posts } from "../models/PostModel";
const { ObjectId } = require("mongodb");
import { Users } from "../models/UserModel";
import { forceAuth } from "../middlewares/forceAuth";
const router: Router = express.Router();

//MINA SIDOR
//OK - GET logged in users patterns
router.get("/myposts", async (req: Request, res: Response) => {
  const userID = req.headers.user;
  const myPosts = await Posts.find({ user: userID });
  res.status(200).send(myPosts);
});

//OK - GET logged in users info
router.get("/myinfo", async (req: Request, res: Response) => {
  const userID = ObjectId(req.headers.user);
  const myInfo = await Users.find({ _id: userID });
  res.status(200).send(myInfo);
});

//OK - POST update the users information
router.post("/:id/editaccount", async (req: Request, res: Response) => {
  const id: String = ObjectId(req.params.id); //säg att id ska vara samma id som inloggat id JWT!!!! Ej finnas i urlen
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
});

//OK - GET a pattern from logged in user
router.get("/:id/pattern", async (req: Request, res: Response) => {
  const id: String = ObjectId(req.params.id);
  const post = await Posts.findOne({ _id: id });
  console.log(post);
  res.send(post);
});

//OK - POST update/edit a pattern from logged in user
router.post("/:id/updatepattern", async (req: Request, res: Response) => {
  const id: String = ObjectId(req.params.id);
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
});

//OK - DELETE a pattern from logged in user
router.post("/:id/deletepost", async (req: Request, res: Response) => {
  const id: String = ObjectId(req.params.id);
  await Posts.findOne({ _id: id }).deleteOne();

  res.sendStatus(200);
  console.log("deleted");
});

//OK - POST a new pattern
router.post("/createpost", async (req: Request, res: Response) => {
  const userID = req.headers.user;

  const newPost = new Posts({
    title: req.body.title,
    image: req.body.image,
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

  res.send(newPost);
});

export default router;
