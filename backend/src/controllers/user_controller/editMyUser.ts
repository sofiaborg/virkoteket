import { Request, Response } from "express";
const { ObjectId } = require("mongodb");
import { Users } from "../../models/UserModel";

export const editMyUser = async (req: Request, res: Response) => {
  const id: String = ObjectId(req.params.id); //säg att id ska vara samma id som inloggat id JWT!!!! Ej finnas i urlen
  const user = await Users.findOne({ _id: id });

  const { email, password, name, description, profilepic } = req.body;

  const updatedUserinfo = await Users.findByIdAndUpdate(
    { _id: id },
    {
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
      description: req.body.description,
      profilefic: req.body.profilepic,
    }
  );
  console.log(updatedUserinfo);
  res.sendStatus(200);
};
