import express, { Application, Request, Response } from "express";
import cors from "cors";
import connectDB from "./config/db";
import router from "./routes/client";
const app: Application = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/client", router);

app.get("/", (req: Request, res: Response) => {
  res.send("API is working...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
