const jwt = require("jsonwebtoken");
require("dotenv").config();
import express, { Router, Request, Response, NextFunction } from "express";

//tvinga användare till inlogg på vissa routes
export const forceAuth = (req: Request, res: Response, next: NextFunction) => {
  // const authHeader = req.headers["authorization"];
  // const token = authHeader && authHeader.split(" ")[1];
  // jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err: any, user: any) => {
  //   if (token) return next();
  //   if (token == null) return res.sendStatus(401);
  //   if (err) return res.sendStatus(403);
  // });
};
