import express, { Router, Request, Response } from "express";
import { Users } from "../../models/UserModel";

export const registerUser = async (req: Request, res: Response) => {
  const newUser = new Users({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    description: req.body.description,
    profilefic: req.body.profilepic,
  });

  const user = await newUser.save();
  console.log(user);
  res.status(200).json(user);
};
