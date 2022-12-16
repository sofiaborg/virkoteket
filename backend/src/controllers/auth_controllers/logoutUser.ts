import express, { Router, Request, Response } from "express";
require("dotenv").config();

export const logoutUser = async (req: Request, res: Response) => {
  res.cookie("token", " ", { maxAge: 0 });
  res.redirect("/");
};
