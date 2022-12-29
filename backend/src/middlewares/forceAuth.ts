const jwt = require("jsonwebtoken");
require("dotenv").config();
import express, { Router, Request, Response, NextFunction } from "express";

//tvinga användare till inlogg på vissa routes
export const forceAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers["authorization"];
  console.log(token + " min token i backend");
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

// const userStr = sessionStorage.getItem("user");
// let user = null;
// if (userStr) user = JSON.parse(userStr);

// if (user && user.accessToken) {
//   return { "x-access-token": user.accessToken }; // for Node.js Express back-end
// } else {
//   return { "x-access-token": null }; // for Node Express back-end
// }
