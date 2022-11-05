import {join} from "path"

const homeController = (req, res) => {
    res.sendFile(join(process.cwd(), "views", "index.html"));
}

export {homeController}