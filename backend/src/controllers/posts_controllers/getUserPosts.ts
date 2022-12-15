import { Request, Response } from "express";
import { Users } from "../../models/UserModel";
const { ObjectId } = require("mongodb");

//not OK
export const getUserPosts = async (req: Request, res: Response) => {
  const id: String = ObjectId(req.params.id);
  Users.findOne({ _id: id })
    .populate("posts") // key to populate
    .then((user) => {
      res.send(user);
    });
};
