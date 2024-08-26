import mongoose from "mongoose";
import connectDB from "../config/db";
import CategoryModel from "../models/Category";

const categories = [
  { name: "cleaning", icon: "FaBucket", color: "#b12fde" },
  { name: "repair", icon: "FaScrewdriverWrench", color: "#ecbb3a" },
  { name: "painting", icon: "FaBrush", color: "#e23e40" },
  { name: "shifting", icon: "FaTruck", color: "#059e96" },
  { name: "plumbing", icon: "PiPipeFill", color: "#ea9319" },
  { name: "electric", icon: "FaLightbulb", color: "#1f71c5" },
];

const uploadCategories = async () => {
  try {
    await connectDB();
    await CategoryModel.insertMany(categories);
    console.log("Categories uploaded successfully");

    mongoose.disconnect();
  } catch (error) {
    console.error("Error uploading categories:", error);
    mongoose.disconnect();
    process.exit(1);
  }
};

uploadCategories();
