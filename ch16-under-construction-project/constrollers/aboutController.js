const aboutController = (req, res) => {
    res.render("about", {"title": "About"});
}

export {aboutController}