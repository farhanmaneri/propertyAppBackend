import express from "express";
import {
  registerUser,
  loginUser,
  getProfile,
  getAllUsers,
} from "../controllers/userController.js";
import { protect, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public
router.post("/register", registerUser);
router.post("/login", loginUser);

// Private
router.get("/profile", protect, getProfile);

// Admin Only
router.get("/", protect, authorizeRoles("admin"), getAllUsers);

export default router;
