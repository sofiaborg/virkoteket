const jwt = require("jsonwebtoken");
require("dotenv").config();
import express, { Router, Request, Response } from "express";

//tvinga användare till inlogg på vissa routes
export const forceAuth = (req: Request, res: Response, next: any) => {
  const token = localStorage.getItem("token");

  if (token && jwt.verify(token, process.env.JWTSECRET)) {
    jwt.decode(token, process.env.JWTSECRET);
    next();
  } else {
    res.redirect("/");
    res.send("not authorized");
  }
};
