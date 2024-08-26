import express, { Request, Response } from "express";
import { getServices } from "../controllers/client";
import { getCategories } from "../controllers/client";
const router = express.Router();

router.get("/services", getServices);
router.get("/categories", getCategories);
export default router;
