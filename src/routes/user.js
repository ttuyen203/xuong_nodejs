import express from "express";
import UserController from "../controllers/user.js";
const router = express.Router();

const userController = new UserController();

router.post("/auth/register", userController.userRegister);
router.post("/auth/login", userController.userLogin);

export default router;
