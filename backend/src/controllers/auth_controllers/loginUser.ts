import express, { Router, Request, Response } from "express";
import { getErrorMessage } from "../../utils/errorMessage";
import * as authServices from "../../../services/authService";
import { CustomRequest } from "../../middleware/auth";
import { Users } from "../../models/UserModel";

export const loginUser = async (req: Request, res: Response) => {
  try {
    const foundUser = await authServices.login(req.body);
    console.log("found user", foundUser.token);
    res.status(200).send(foundUser);
  } catch (error) {
    return res.status(500).send(getErrorMessage(error));
  }
};
