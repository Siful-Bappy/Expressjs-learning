import {join} from "path"

const homeController = (req, res) => {
    res.render("index", {"name": "Bappy"});
}
// const homeController = (req, res) => {
//     res.send("Home page is available");
// }

export {homeController};