import { getUserPosts } from "../controllers/posts_controllers/getUserPosts";
import { createReview } from "../controllers/posts_controllers/createReview";
import { getSinglePost } from "../controllers/posts_controllers/getSinglePost";
import { getPosts } from "../controllers/posts_controllers/getPosts";
import express, { Router } from "express";

const router: Router = express.Router();

router.get("/getall", getPosts);
router.get("/:id/getone", getSinglePost);
router.post("/createreview", createReview);
router.get("/:id/patterns", getUserPosts);

export default router;
