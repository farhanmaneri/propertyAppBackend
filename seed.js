import mongoose from "mongoose";
import dotenv from "dotenv";
import Plot from "./models/plotModel.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Connected to MongoDB");

    // ✅ Updated field names to match your schema
    const fakePlots = [
      { plotNumber: "A-101", location: "Block A", size: "5 Marla", price: 1500000, status: "available" },
      { plotNumber: "A-102", location: "Block A", size: "10 Marla", price: 2500000, status: "sold" },
      { plotNumber: "B-201", location: "Block B", size: "1 Kanal", price: 4500000, status: "available" }
    ];

    await Plot.deleteMany(); // Clear old data
    await Plot.insertMany(fakePlots);

    console.log("✅ Fake plots added successfully!");
    process.exit();
  })
  .catch((err) => console.error(err));
