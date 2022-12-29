import express, { Router, Request, Response } from "express";
import { hashPassword, comparePassword } from "../../utils/utils";
import { Users } from "../../models/UserModel";
const jwt = require("jsonwebtoken");
require("dotenv").config();

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  Users.findOne({ email }, (err: any, user: any) => {
    if (user && comparePassword(password, user.password)) {
      console.log("inlogadd");
      // Logged in
      const userData = { userId: user._id };
      const accessToken = jwt.sign(userData, process.env.JWTSECRET);

      res.status(200).send({
        id: user._id,
        email: user.email,
        token: accessToken,
      });
    } else {
      // Login incorrect
      console.log("failed");
      res.sendStatus(400);
    }
  });
};
