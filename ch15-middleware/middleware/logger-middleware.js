var myLogger = (req, res, next) => {
    console.log("logged")
    next();
}

export default myLogger;