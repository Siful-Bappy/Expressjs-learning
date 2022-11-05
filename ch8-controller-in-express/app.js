import express from "express";
import str from "./routes/student.js"
const app = express();
const port = 3000;

app.use("/student", str);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
