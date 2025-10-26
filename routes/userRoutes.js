import express from "express";
import {
  registerUser,
  loginUser,
  getAllUsers,
  getProfile,
} from "../controllers/userController.js";
import { protect, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, getProfile);
router.get("/", protect, authorizeRoles("admin"), getAllUsers);

export default router;
