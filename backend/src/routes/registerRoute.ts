import express, { Router, Request, Response } from "express";
import { Users } from "../models/UserModel";

const router: Router = express.Router();

router.post("/createuser", [], async (req: Request, res: Response) => {
  const newUser = new Users({
    mail: req.body.mail,
    password: req.body.password,
    image: req.body.image,
    description: req.body.description,
  });
  console.log(req.body);
  await newUser.save();
  res.send("skapat ny user");
});

export default router;
