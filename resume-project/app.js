import express, { application } from 'express'
const app = express()
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    app.send("Home page");
})

app.listen(port, () => {
    console.log(`The app listening`, port);
})