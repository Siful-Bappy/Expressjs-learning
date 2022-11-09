import express from 'express'
import connectDB from './db/connectdb.js';
import { getAllDoc } from './models/student2.js';
// import { getAllDoc, getAllDocSpecificField, getSingleDoc } from './models/student2.js';
// import studentDoc from './models/student2.js';
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";
const app = express()
const port = 3000

connectDB(DATABASE_URL);
// studentDoc();
getAllDoc();
// getSingleDoc();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})