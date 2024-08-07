import mongoose from "mongoose";

let isConnected = false;
export const connectToDB = async () => {
    mongoose.set("strictQuery", true)
    if (isConnected) {
        console.log('mongoDB is already Connected!');
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
          dbName: process.env.DB_NAME,
        //   useNewUrlParser: true,
        //   useUnifiendTopology: true,
        });
        isConnected = true;
        console.log("MongoDB is Connected!")
    } catch (err) {
        console.log(err);
    }
}