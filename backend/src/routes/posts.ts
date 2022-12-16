import { getUserPosts } from "../controllers/posts_controllers/getUserPosts";
import { createReview } from "../controllers/posts_controllers/createReview";
import { getSinglePost } from "../controllers/posts_controllers/getSinglePost";
import { getPosts } from "../controllers/posts_controllers/getPosts";
import express, { Router } from "express";
import { forceAuth } from "../middlewares/forceAuth";

const router: Router = express.Router();

router.get("/getall", forceAuth, getPosts);
router.get("/:id/getone", forceAuth, getSinglePost);
router.post("/createreview", forceAuth, createReview);
router.get("/:id/patterns", forceAuth, getUserPosts);

export default router;
