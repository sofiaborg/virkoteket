import { getUserPosts } from "../controllers/posts_controllers/getUserPosts";
import { createReview } from "../controllers/posts_controllers/createReview";
import { getSinglePost } from "../controllers/posts_controllers/getSinglePost";
import { getPosts } from "../controllers/posts_controllers/getPosts";
import express, { Router } from "express";
import { auth } from "../middleware/auth";

const router: Router = express.Router();

router.get("/getall", auth, getPosts);
router.get("/:id/getone", auth, getSinglePost);
router.post("/createreview", auth, createReview);
router.get("/:id/patterns", auth, getUserPosts);

export default router;
