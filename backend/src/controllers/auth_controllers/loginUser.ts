import express, { Router, Request, Response } from "express";
import { Users } from "../../models/UserModel";

export const loginUser = async (req: Request, res: Response) => {
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
};
