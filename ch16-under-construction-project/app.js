import express from 'express'
const app = express()
import web from "./routes/web.js"
const port = process.env.PORT || 3000;

app.set("views", "./views")
app.set("view engine", "ejs")
app.use("/", web);

app.listen(port, () => {
    console.log('listening on port ' + port);
})