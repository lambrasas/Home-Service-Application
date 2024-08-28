import express, { Application, Request, Response } from "express";
import cors from "cors";
import connectDB from "./config/db";
import clientRouter from "./routes/client";
import authRouter from "./routes/auth";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/client", clientRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("API is working...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
