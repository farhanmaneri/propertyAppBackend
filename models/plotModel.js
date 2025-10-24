import mongoose from "mongoose";

const plotSchema = new mongoose.Schema({
  plotNumber: { type: String, required: true, unique: true },
  size: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  status: { type: String, enum: ["available", "booked", "sold"], default: "available" },
  bookedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

export default mongoose.model("Plot", plotSchema);
