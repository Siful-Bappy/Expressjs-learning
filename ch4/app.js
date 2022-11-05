const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });

// app.all("/all", (req, res) => {
//     res.send("Bappy")
// })

// app.all("/all/*", (req, res) => {
//     res.send("Page not found")
// })

// app.all("/ab?cd", (req, res) => {
//     res.send("Abcd route is been invoked");
// })

// app.all("/random.text", (req, res) => {
//     res.send("random text route is been invoked");
// })

// app.get(/b/, (req, res) => {
//     res.send("Ragular express says this route is Bappy");
// })

// const callback = (req, res) => {
//     res.send("Hello I am getting the one callback")
// }

// app.get("/about", callback);

// two callback
// app.get("/", (req, res, next) => {
//     const number = 10 + 10;
//     console.log("First callback called", number);
//     next();
// }, (req, res) => {
//     console.log("Second callback called");
//     res.send("Second callback called");
// })

const callbackOne = (req, res, next) => {
    console.log("First callback called");
    next();
}
const callbackSecond = (req, res) => {
    console.log("Second callback called");
    res.send("second callback called")
}

app.get("/second", [callbackOne, callbackSecond]);

app.all("*", (req, res) => {
    res.send("Page not found")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})