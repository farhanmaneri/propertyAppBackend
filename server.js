import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";
import plotRoutes from "./routes/plotRoutes.js";
// import ledgerRoutes from "./routes/ledgerRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/users", userRoutes);
app.use("/api/plots", plotRoutes);
// app.use("/api/ledger", ledgerRoutes);

// ✅ Health check route (for Vercel ping)
app.get("/", (req, res) => {
  res.send("Business Management System API is running ✅");
});

// ✅ Handle unknown routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// ✅ Port configuration (for local + vercel)
const PORT = process.env.PORT || 5000;

// Start server only if not running in Vercel serverless environment
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () =>
    console.log(`🚀 Server running locally on port ${PORT}`)
  );
}

// ✅ Export app for Vercel (important!)
export default app;