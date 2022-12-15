import express, { Router, Request, Response } from "express";
import { getErrorMessage } from "../../utils/errorMessage";
import * as authServices from "../../../services/authService";
import { CustomRequest } from "../../middleware/auth";
import { Users } from "../../models/UserModel";

export const registerUser = async (req: Request, res: Response) => {
  try {
    await authServices.register(req.body);
    res.status(200).send("Inserted successfully");
  } catch (error) {
    return res.status(500).send(getErrorMessage(error));
  }
};

// const newUser = new Users({
//   email: req.body.email,
//   password: req.body.password,
//   name: req.body.name,
//   description: req.body.description,
//   profilefic: req.body.profilepic,
// });

// const user = await newUser.save();
// console.log(user);
// res.status(200).json(user);
