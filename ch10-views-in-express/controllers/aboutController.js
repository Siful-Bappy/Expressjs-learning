import { join } from "path";

const aboutController = (req, res) => {
  // res.send("About page");
  // res.sendFile("D:\\Programming\\Nodejs\\expressjs-learning\\ch10-views-in-express\\views\\about.html")
  console.log(join(process.cwd(), "views", "about.html"));
  res.sendFile(join(process.cwd(), "views", "about.html"));
};

export { aboutController };
