import express from 'express'
import web from "./routes/web.js"
import {join} from "path";
const app = express()
const port = 3000

// static files
// app.use(express.static("public"))
// static files use by using join method
app.use(express.static(join(process.cwd(), "public")));
// app.use("/static", express.static(join(process.cwd(), "public")));
console.log(join(process.cwd(), "public"))

app.use("/", web);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})