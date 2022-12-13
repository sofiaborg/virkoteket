import express, { Router, Request, Response } from "express";
import { Posts } from "../models/PostModel";

const router: Router = express.Router();

//GET. at "mina mönster" at "mina sidor": get all patterns created by the logged in user when entering start page
router.get("/login", [], async (req: Request, res: Response) => {
  const allPosts = await Posts.find();
  res.send(allPosts);
});

//GET. at "mina mönster" at "mina sidor" get a single pattern created by the user that is logged in

//POST.  at "mina mönster" at "mina sidor" update/edit a single pattern created by the user that is logged in

//DELETE. at "mina mönster" at "mina sidor" delete a single pattern created by the user that is logged in

//MINA SIDOR
//GET. at "mitt konto" at "mina sidor": get all info from UserModel. mail, namn, telefon.  (created when user register)

//GET. at "min profil" at "mina sidor": get all info img, beskrivande text (if anything exists).
//POST. at "mitt konto at "mina sidor": post the info that the user adds (img, beskrivning).

//POST - when user creates new post from button "create patten" in "Mina sidor"
router.post("/createpost", [], async (req: Request, res: Response) => {
  const newPost = new Posts({
    title: req.body.title,
    image: req.body.image,
    description: req.body.description,
    type: req.body.type,
    category: req.body.category,
    difficulty: req.body.difficulty,
    yarn: req.body.yarn,
    hook: req.body.hook,
    space: req.body.space,
  });

  await newPost.save();
  res.send("skapad");
});

export default router;
