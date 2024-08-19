import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async (): Promise<void> => {
  try {
    const mongoURI = process.env.MONGO_URI;
    const dbName = process.env.MONGO_DB_NAME;

    const options: ConnectOptions = {
      dbName: dbName,
    };

    if (!mongoURI) {
      throw new Error("MongoDB URI is not defined in the environment");
    }
    if (!dbName) {
      throw new Error(
        "MongoDB database name is not defined in the environment"
      );
    }
    await mongoose.connect(mongoURI, options);
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    if (error instanceof Error) {
      console.error("MongoDB connection failed: ", error.message);
    } else {
      console.error("Unexpected error during MongoDB connection: ", error);
    }
    process.exit(1);
  }
};
export default connectDB;
