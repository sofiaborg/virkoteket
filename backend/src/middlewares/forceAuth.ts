const jwt = require("jsonwebtoken");
require("dotenv").config();
import express, { Router, Request, Response, NextFunction } from "express";

//tvinga användare till inlogg på vissa routes
export const forceAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers["authorization"];
  console.log(token);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err: any, user: any) => {
    if (token) {
      console.log("token exists");
      next();
    } else if (!token) {
      console.log("no token");
      res.sendStatus(403);
    }
  });
};
