import express from 'express'
import connectDB from './db/connectdb.js'
import { updateBuId } from './models/Student.js'
const app = express()
const port = 3000
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017"

connectDB(DATABASE_URL)
// studentDoc();
updateBuId("636b3906e00e72b5a8587467");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})