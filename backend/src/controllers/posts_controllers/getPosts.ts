import express, { Router, Request, Response } from "express";
import { Posts } from "../../models/PostModel";

//OK - GET all posts including its reviews and author. OBS - this needs a lot of ifs depending on which filter/category is chosen
export const getPosts = async (req: Request, res: Response) => {
  const posts = await Posts.find();

  res.send(posts);
};
