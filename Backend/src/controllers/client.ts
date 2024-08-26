import Category from "../models/Category";
import ServiceModel from "../models/Service";
import { Request, Response } from "express";
export const getServices = async (req: Request, res: Response) => {
  try {
    const services = await ServiceModel.find();

    res.status(200).json(services);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      res.status(404).json({ message: error.message });
    }
  }
};
export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find();

    res.status(200).json(categories);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      res.status(404).json({ message: error.message });
    }
  }
};
