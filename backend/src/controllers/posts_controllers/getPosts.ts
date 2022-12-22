import express, { Router, Request, Response } from "express";
import { Posts } from "../../models/PostModel";

export const getPosts = async (req: Request, res: Response) => {
  let category = {};
  let filters = {};

  if (req.query.category) {
    category = { category: req.query.category };
  }

  if (req.query.filters) {
    const filterToString = JSON.stringify(req.query.filters);
    let filters = JSON.parse(decodeURIComponent(filterToString));
    filters = Object.assign(filters, { filters: req.query.filters });
  }

  const posts = await Posts.find(filters).lean();

  res.send(posts);
};
