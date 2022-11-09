import mongoose from "mongoose";

const connectDB = async(DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
            dbName: "Blogdb"
        }
        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log("Database connect successful");
    } catch (e) {
        console.log(e)
    }
}

export default connectDB;