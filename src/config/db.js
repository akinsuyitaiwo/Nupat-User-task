/* eslint-disable no-useless-catch */
import mongoose from "mongoose";
import config from "./index.js";

const URI = config.env.DATABASE_URL;

const connectDb = async () => {
  try {
    mongoose.set("strictQuery", false);
    const connection = mongoose.connect(URI);
    return connection;
  } catch (error) {
    throw error;
  }
};

export default connectDb;
