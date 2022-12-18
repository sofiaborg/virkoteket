import express, { Router, Request, Response } from "express";
require("dotenv").config();

export const logoutUser = async (req: Request, res: Response) => {
  localStorage.removeItem("token");
  console.log("logged out");
};
