import { getMyPost } from "../controllers/user_controller/getMyPosts";
import { createPost } from "../controllers/user_controller/createPost";
import { editMyPost } from "../controllers/user_controller/editMyPost";
import { editMyUser } from "../controllers/user_controller/editMyUser";
import { getMyUser } from "../controllers/user_controller/getMyUser";
import { deleteMyPost } from "../controllers/user_controller/deleteMyPost";
import express, { Router } from "express";
import { auth } from "../middleware/auth";

const router: Router = express.Router();

//MINA SIDOR
//OK - GET logged in users info
router.get("/:id/myaccount", auth, getMyUser);

//OK - POST update the users information
router.post("/:id/editaccount", auth, editMyUser);

//OK - GET a pattern from logged in user
router.get("/:id/pattern", auth, getMyPost);

//OK - POST update/edit a pattern from logged in user
router.post("/:id/updatepattern", auth, editMyPost);

//OK - DELETE a pattern from logged in user
router.post("/:id/deletepost", auth, deleteMyPost);

//OK - POST a new pattern
router.post("/createpost", auth, createPost);

export default router;
