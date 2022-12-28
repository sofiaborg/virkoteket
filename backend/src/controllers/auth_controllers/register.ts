import express, { Router, Request, Response } from "express";
import { hashPassword, comparePassword } from "../../utils/utils";
import { Users } from "../../models/UserModel";

export const registerUser = async (req: Request, res: Response) => {
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
};
