import { Reviews } from "../../models/ReviewModel";
import express, { Router, Request, Response } from "express";

export const createReview = async (req: Request, res: Response) => {
  const newReview = new Reviews({
    grade: req.body.grade,
    comment: req.body.comment,
    image: req.body.image,
  });

  await newReview.save();
  console.log(newReview);
  res.send("skapad");
};
