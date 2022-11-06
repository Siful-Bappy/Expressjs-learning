import express from 'express'
import myLogger from './middleware/logger-middleware.js'
import web from "./routes/web.js"
import student from "./routes/student.js"
const app = express()
const port = 3000

app.set("views", "./views")
app.set("view engine", "ejs")

// application level middleware

// app.use(myLogger); 
app.use("/about", myLogger);
app.use("/", student)
app.use("/", web);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})