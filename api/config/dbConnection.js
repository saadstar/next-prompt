const mongoose = require("mongoose");


const connectDB = async () => {
    try {
          await mongoose.connect(process.env.MONGODB_URL, 
            {
              dbName: process.env.DB_NAME,
            }
          );
          console.log("Connected to database.");
    } catch (err) {
        console.log("Failed to connect to database!");
    }
}

module.exports = connectDB;