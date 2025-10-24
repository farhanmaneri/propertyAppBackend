import mongoose from "mongoose";

const ledgerSchema = new mongoose.Schema({
  transactionType: { type: String, enum: ["income", "expense"], required: true },
  amount: { type: Number, required: true },
  description: { type: String },
  relatedPlot: { type: mongoose.Schema.Types.ObjectId, ref: "Plot" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

export default mongoose.model("Ledger", ledgerSchema);
