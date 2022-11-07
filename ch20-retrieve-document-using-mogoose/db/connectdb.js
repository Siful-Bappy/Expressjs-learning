import mongoose from "mongoose";
const connectDB = async(DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
            dbName: "Student2"
        }
        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log("Database is been connected successfully");
    } catch (err) {
        console.log(err);
    }
}

export default connectDB;