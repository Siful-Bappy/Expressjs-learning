import {join} from "path"

const homeController = (req, res) => {
    // res.send("Home page");
    // res.sendFile("D:\\Programming\\Nodejs\\expressjs-learning\\ch10-views-in-express\\views\\index.html")

    res.sendFile(join(process.cwd(), "views", "index.html"));
}

export {homeController}