// old
const stu = require("./routes/student.js");
const tea = require("./routes/teacher.js");

// new
// import stu from "./router/student.js";
// import tea from "./router/teacher.js";

const express = require('express')
const app = express()
const port = 3000

// Load router modules
app.use("/student", stu)
app.use("/teacher", stu)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})