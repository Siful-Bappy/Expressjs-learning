// import mongoose, {Schema} from "mongoose";
import mongoose from "mongoose";

// defining schema

const studnetSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 18, max: 50 },
  fees: {type: mongoose.Decimal128, required: true, validate: v => v >= 5500.50},
  hobbies: { type: Array },
  isActive: { type: Boolean },
  comments: [{value: {type: String}, publish: {type: Date, default: Date.now }}],
  join: { type: Date, default: Date.now },
});

console.log(studnetSchema.path("age"))

// compiling schema
const studnetModel = mongoose.model("student", studnetSchema);
