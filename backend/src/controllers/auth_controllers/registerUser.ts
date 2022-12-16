import express, { Router, Request, Response } from "express";
import { hashPassword, comparePassword } from "../../utils/utils";
import { Users } from "../../models/UserModel";

export const registerUser = async (req: Request, res: Response) => {
  const { email, password, confirmPassword } = req.body;
  console.log(email);
  console.log(password);
  console.log(confirmPassword);

  Users.findOne({ email: String }, async (err: any, user: any) => {
    if (user) {
      res.send("Den här mailen finns redan");
    } else if (password !== confirmPassword) {
      res.send("Lösenorden matchar inte");
    } else {
      const newUser = new Users({
        email,
        password: hashPassword(password),
      });
      await newUser.save();
      res.send(201);
    }
  });
};
