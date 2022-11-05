import express from "express";
// import stu from "./routes/student.js";
const app = express();
const port = 3000;

// app.use("/student", stu);

// app.get("/student/delete/:id/:student", (req, res) => {
//   const param = req.params;
//   const id = req.params.id;
//   const student = req.params.student;
//   console.log(id, student);
//   res.send(`Delete student: ${id}, ${student}`);
// });

app.get("/train/:from-:to", (req, res) => {
    const {from, to} = req.params;
    console.log(`Respose from ${from} to ${to}`)
    res.send(`Respose from ${from} to ${to}`)
})

// with regx
app.get("/student/delete/:id([0-9]{2})", (req, res) => {
    const {id} = req.params;
    console.log("student delete")
    res.send(`Student delete ${id}`)
})

app.get("/:type(post|article)/:id", (req, res) => {
    const {type, id} = req.params;
    // res.send(`${type} and ${id}`)
    res.send("Post and ID")
    console.log(`${type} and ${id}`)
})

app.get("/student/add/:id([a-z]{2})", (req, res) => {
    const {id} = req.params;
    res.send(`Student add ${id}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
