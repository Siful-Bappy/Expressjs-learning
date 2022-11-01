import express from "express";
const app = express();
const port = 5000;

app.get(`/hello:1`, (req, res) => {
// const param = req.params.id;
  const number = 10 + 20;
  const name = "Bappy";
  const object = {
    number: number,
    name: name,
    age: 23,
  };

  res.send(object);
//   res.send("The params of the listen: ", param);
console.log(object);
});

app.post('/', (req, res) => {
    const print = 'Got a POST request';
    res.send(print);
    console.log(print);
  })



app.listen(port, () => {
  console.log("The server is listening on port " + port);
});
