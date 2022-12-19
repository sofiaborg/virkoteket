const jwt = require("jsonwebtoken");
require("dotenv").config();
import express, { Router, Request, Response, NextFunction } from "express";

//tvinga användare till inlogg på vissa routes
export const forceAuth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err: any, user: any) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    console.log(user);
    console.log(token);
    next();
  });
};
