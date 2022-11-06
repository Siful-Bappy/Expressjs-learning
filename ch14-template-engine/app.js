import express, { application } from 'express'
import web from "./routes/web.js";
const app = express()
const port = 3000;


app.use("/", web);

app.listen(port, () => {
    console.log(`The app listening`, port);
})