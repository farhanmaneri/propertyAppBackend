import express from "express";
import { getPlots, addPlot } from "../controllers/plotController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, getPlots).post(protect, addPlot);

export default router;
