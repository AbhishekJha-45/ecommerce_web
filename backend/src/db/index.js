import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`);

    const connectionInstance = mongoose.connection;

    connectionInstance.on("connected", () => {
      console.log(
        `\nDatabase connected!! DB_HOST -> ${connectionInstance.host}`
      );
    });

    connectionInstance.on("error", (error) => {
      console.error("MongoDb connection FAILED", error);
      throw error;
    });
  } catch (error) {
    console.error("Error connecting to database", error);
    throw error;
  }
};

export default connectDB;
