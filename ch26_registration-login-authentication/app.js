import express from "express";
import {join} from "path";
import connectDB from "./db/connectdb.js";
// import web from "./routes/web.js";
const app = express();
const port = process.env.PORT || 5000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017"

connectDB(DATABASE_URL);

app.listen(port, () => {
    console.log("My app listening on port: ", port);
})