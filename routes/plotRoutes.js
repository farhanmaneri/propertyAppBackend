import express from "express";
import { getPlots, addPlot } from "../controllers/plotController.js";

const router = express.Router();

router.route("/").get(getPlots).post(addPlot);

export default router;
