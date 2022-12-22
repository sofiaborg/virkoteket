import express, { Router, Request, Response } from "express";
import { Posts } from "../../models/PostModel";

export const getPosts = async (req: Request, res: Response) => {
  let category = {};
  let filters = {};

  if (req.query.category) {
    console.log(req.query.category + " hej");
    category = { category: req.query.category };
  }

  if (req.query.filters) {
    console.log(req.query.filter + " hej");
    filters = Object.assign(filters, { filters: req.query.filters });
  }

  const posts = await Posts.find(category).lean();

  res.send(posts);
};
