import express, { Router, Request, Response } from "express";
const router: Router = express.Router();
import { Users } from "../models/UserModel";
import { hashPassword, comparePassword } from "../utils/utils";
const jwt = require("jsonwebtoken");
require("dotenv").config();

//register user
router.post("/register", async (req: Request, res: Response) => {
  try {
    const { email, username, password } = req.body;
    Users.findOne(
      { username: req.body.username },
      async (err: any, usernameExists: string) => {
        if (usernameExists) {
          res.sendStatus(400);
        } else {
          const newUser = new Users({
            email,
            username,
            password: hashPassword(password),
          });
          await newUser.save();
          res.send(newUser);
        }
      }
    );
  } catch (error) {
    res.status(500).send(error);
  }
});

// log in
router.post("/login", async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await Users.findOne({ username });
    if (!user) {
      res.status(404).send({ error: "User not found" });
    } else {
      const passwordMatch = await comparePassword(password, user.password);
      if (!passwordMatch) {
        res.status(401).send({ error: "Invalid Password" });
      } else {
        console.log("logged in");
        //logged in
        const userData = { userId: user._id };
        const accessToken = jwt.sign(userData, process.env.JWTSECRET);
        res.status(200).send({
          id: user._id,
          username: user.username,
          token: accessToken,
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Login failed.");
  }
});

export default router;
