import { Request, Response } from "express";
const { ObjectId } = require("mongodb");
import { Users } from "../../models/UserModel";

export const getMyUser = async (req: Request, res: Response) => {
  const id: String = ObjectId(req.params.id); //säg att id ska vara samma id som inloggat id JWT!!!! Ej finnas i urlen
  const user = await Users.findOne({ _id: id });
  console.log(user);
  res.sendStatus(200);
};
