import mongoose from "mongoose";
const connectDB = async(DATABASE_URL) => {
    try {
        const option = {
            dbName: "Student2"
        }
        await mongoose.connect(DATABASE_URL, option);
        console.log("Mongodb is been connected");
    } catch (e) {
        console.log(e);
    }
}

export default connectDB;