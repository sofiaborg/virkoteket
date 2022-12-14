import express, { Router, Request, Response } from "express";
import { Posts } from "../models/PostModel";

const router: Router = express.Router();

//GET a pattern created by the user that is logged in

//POST update/edit a pattern created by the user that is logged in

//DELETE a pattern created by the user that is logged in

//MINA SIDOR
//GET all info from UserModel. mail, namn, telefon.  (created when user register)

//GET all info img, beskrivande text (if anything exists).
//POST the new info that the user adds (img, beskrivning).

//POST a new pattern
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
