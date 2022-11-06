import express, { application } from 'express'
import {join} from "path"
import web from "./routes/web.js";
const app = express()
const port = 5000;

app.set("views", "./views")
app.set("view engine", "ejs");
app.use(express.static(join(process.cwd(), "public")))
app.use("/", web);
app.use("/about", web);

app.listen(port, () => {
    console.log(`The app listening`, port);
})