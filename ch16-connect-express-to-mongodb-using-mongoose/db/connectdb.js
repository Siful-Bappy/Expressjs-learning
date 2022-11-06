import mongoose from "mongoose";

const connectDB = () => {
    return mongoose.connect("mongodb://localhost:27017/scholdb")
    .then(() => {
        console.log("Connection is successful");
    }).catch((err) => {
        console.log(err)
    })
}

export default connectDB;