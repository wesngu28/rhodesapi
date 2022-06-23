import mongoose from 'mongoose';

export const neuralConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI!);
    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}