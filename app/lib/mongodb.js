//Establish a connection to a MongoDB database

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      //If connection not established
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("MongoDB Connected");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { connectDB };
