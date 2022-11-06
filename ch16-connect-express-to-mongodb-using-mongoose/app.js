import express from "express";
import connectDB from "./db/connectdb.js";
const app = express();
const port = 3000;

// import mongoose from "mongoose";
// mongoose.connect("mongodb://localhost:27017/scholdb")
// .then(() => {
//     console.log("Connected Successfully with mongoose");
// })

connectDB();

app.listen(port, () => {
    console.log("listening on port: " + port);
})