const express = require("express");
const app = express();
const env = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/dbConnection");
const promptRouter = require("./routes/prompt");
const userRoute = require("./routes/user");


const PORT = 3500 || process.env.PORT;
connectDB();
app.use(express.json());
app.use(cors());


app.use("/api/prompt/", promptRouter);
app.use("/api/user/", userRoute);

app.listen((PORT),() => {
    console.log(`server running on ${PORT}`)
})