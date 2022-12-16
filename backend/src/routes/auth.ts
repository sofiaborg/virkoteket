import { logoutUser } from "./../controllers/auth_controllers/logoutUser";
import express, { Router } from "express";
const router: Router = express.Router();
import { registerUser } from "../controllers/auth_controllers/registerUser";
import { loginUser } from "../controllers/auth_controllers/loginUser";

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

export default router;
