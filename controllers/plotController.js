import Plot from "../models/plotModel.js";

// @desc    Get all plots
// @route   GET /api/plots
export const getPlots = async (req, res) => {
  try {
    const plots = await Plot.find();
    res.json(plots);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Add new plot
// @route   POST /api/plots
export const addPlot = async (req, res) => {
  try {
    const { code, block, size, price, status } = req.body;
    const newPlot = new Plot({ code, block, size, price, status });
    const savedPlot = await newPlot.save();
    res.status(201).json(savedPlot);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
