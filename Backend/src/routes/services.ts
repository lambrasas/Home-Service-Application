import express, { Request, Response } from "express";
import ServiceModel from "../models/Service";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const services = await ServiceModel.find();
    res.json(services);
  } catch (error) {
    console.error("Error fetching services:", error);
    res.status(500).json({ error: "Failed to fetch services" });
  }
});
export default router;
