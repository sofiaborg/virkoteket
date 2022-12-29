import express, { Router, Request, Response } from "express";
const router: Router = express.Router();
import { Users } from "../models/UserModel";
import { hashPassword, comparePassword } from "../utils/utils";
const jwt = require("jsonwebtoken");
require("dotenv").config();

//registrera användare
router.post("/register", async (req: Request, res: Response) => {
  const { email, password, confirmPassword } = req.body;
  console.log(email);
  console.log(password);
  console.log(confirmPassword);

  Users.findOne(
    { email: req.body.email },
    async (err: any, emailExists: string) => {
      if (emailExists) {
        res.sendStatus(400);
      } else {
        const newUser = new Users({
          email,
          password: hashPassword(password),
        });
        await newUser.save();
        res.send(newUser);
      }
    }
  );
});

// logga in
router.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  Users.findOne({ email }, (err: any, user: any) => {
    if (user && comparePassword(password, user.password)) {
      console.log("inloggad");
      // Logged in
      const userData = { userId: user._id };
      const accessToken = jwt.sign(userData, process.env.JWTSECRET);

      res.status(200).send({
        id: user._id,
        email: user.email,
        token: accessToken,
      });
    } else {
      console.log("failed");
      res.sendStatus(400);
    }
  });
});

//logga ut
router.post("/logout", async (req: Request, res: Response) => {});

export default router;
