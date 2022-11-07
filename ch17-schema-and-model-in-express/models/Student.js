// import mongoose, {Schema} from "mongoose";
import mongoose from "mongoose";

// defining schema

const studnetSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 18, max: 50 },
  fees: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 5500.5,
  },
  hobbies: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, publish: { type: Date, default: Date.now } },
  ],
  join: { type: Date, default: Date.now },
});

// console.log(studnetSchema.path("age"));

// compiling schema
const studnetModel = mongoose.model("student", studnetSchema);




// const createDoc = async () => {
//   try {
//     // Create new document
//     const studnetDoc = new studnetModel({
//       name: "Bappy",
//       age: 24,
//       fees: 6500,
//       hobbies: ["Hiking", "Guiter"],
//       comments: [{ value: "This is good mongoose" }],
//     });

//     // saving doucment
//     const result = await studnetDoc.save();
//     console.log(result);
//   } catch (e) {
//     console.log("The erro is coming from: ", e);
//   }
// };


const createDoc = async (name, age, fees, hobbies, comments) => {
    try {
      // Create new document
      const studnetDoc = new studnetModel({
        name: name,
        age: age,
        fees: fees,
        hobbies: hobbies,
        comments: comments,
      });
  
      // saving doucment
      const result = await studnetDoc.save();

      // insert many
      // const result = await createDoc.insertMany([studentDoc])
      console.log(result);
    } catch (e) {
      console.log("The erro is coming from: ", e);
    }
  };

export default createDoc;
