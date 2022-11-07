import express from 'express';
import connectDB from './db/connectdb.js';
// import "./models/Student.js"
import createDoc from './models/Student.js';
const app = express()
const port = 3000
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017"

connectDB(DATABASE_URL)
// createDoc();
createDoc("Bappy", 29, 8888.00, ["Gaming", "Danching"], [{value: "This is message"}]);


// for multiple
// createDoc();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})