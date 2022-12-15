import express, { Router, Request, Response } from "express";
import { Posts } from "../../models/PostModel";
const { ObjectId } = require("mongodb");

export const getSinglePost = async (req: Request, res: Response) => {
  const id: String = ObjectId(req.params.id);
  const post = await Posts.findOne({ _id: id });
  console.log(post);
  res.sendStatus(200);
};
