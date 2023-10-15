import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("DB on");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "bryanify",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("Database connected to MongoDB Atlas");
  } catch (error) {
    console.log(error);
  }
};
