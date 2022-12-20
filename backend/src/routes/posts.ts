import { getUserPosts } from "../controllers/posts_controllers/getUserPosts";
import { createReview } from "../controllers/posts_controllers/createReview";
import { getSinglePost } from "../controllers/posts_controllers/getSinglePost";
import { getPosts } from "../controllers/posts_controllers/getPosts";
import express, { Router } from "express";
import { forceAuth } from "../middlewares/forceAuth";

const router: Router = express.Router();

router.get("/getposts", getPosts);
router.get("/:id/getsinglepost", getSinglePost);
router.post("/createreview", createReview);
router.get("/:id/getuserposts", getUserPosts);

export default router;
