import {join} from "path"

const homeController = (req, res) => {
    res.send(join(process.cwd(), "views", "home.ejs"));
}
// const homeController = (req, res) => {
//     res.send("Home page is available");
// }

export {homeController};