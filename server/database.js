// connection to our database

import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    mongoose.set('strictQuery', false);
    const mongoUri = process.env.MANGO_URI || process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error('Missing MANGO_URI (or MONGO_URI). Add it to a .env file in the project root.');
    }
    const connect = await mongoose.connect(mongoUri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  } 
};

export default connectToDatabase;