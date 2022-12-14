import express, { Router, Request, Response } from "express";

const router: Router = express.Router();
import { Users } from "../models/UserModel";
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", [], async (req: Request, res: Response) => {
  console.log(req.body.email);
  const newUser = new Users({
    email: req.body.email,
    password: req.body.password,
  });

  const user = await newUser.save();
  res.status(200).json(user);
});

//LOGIN
router.post("/login", [], async (req: Request, res: Response) => {
  // try {

  //kolla om användaren finns i users-collection i db. Om inte finns, säg "Wrong credentials"
  const user = await Users.findOne({ username: req.body.username });
  !user && res.status(400).json("Wrong credentials!");

  //   const validated = await bcrypt.compare(req.body.password, user.password);
  //   !validated && res.status(400).json("Wrong credentials!");

  //   const { password, ...others } = user._doc;
  //   res.status(200).json(others);
  // } catch (err) {
  //   res.status(500).json(err);
  //  }
});

export default router;
