import express, { Router, Request, Response } from "express";
import { hashPassword, comparePassword } from "../../utils/utils";
import { Users } from "../../models/UserModel";
const jwt = require("jsonwebtoken");
require("dotenv").config();

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  Users.findOne({ email }, (err: any, user: any) => {
    if (user && comparePassword(password, user.password)) {
      // Logged in
      const userData = { userId: user._id };
      const userID = user._id;
      const accessToken = jwt.sign(userData, process.env.JWTSECRET);
      console.log("logged in backend");
      res.send({ accessToken, userID });
    } else {
      // Login incorrect
      res.send("login failed");
    }
  });
};
