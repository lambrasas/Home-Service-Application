import express, { Application, Request, Response, response } from "express";
import cors from "cors";
import connectDB from "./config/db";

const app: Application = express();
connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("API is working...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
