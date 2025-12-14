import mongoose from "mongoose";

export const connectDB = async () => {
  const mongoUri = "mongodb://127.0.0.1:27017/sweet_shop";

  try {
    await mongoose.connect(mongoUri);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed", error);
    process.exit(1);
  }
};
