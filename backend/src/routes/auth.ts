import { logoutUser } from "../controllers/auth_controllers/logout";
import express, { Router } from "express";
const router: Router = express.Router();
import { registerUser } from "../controllers/auth_controllers/register";
import { loginUser } from "../controllers/auth_controllers/login";

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

export default router;
