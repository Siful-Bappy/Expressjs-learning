import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
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

const studentModul = mongoose.model("Student", studentSchema);

// const studentDoc = async () => {
//   try {
//     const studnetDoc = new studentModul({
//       name: "Siful",
//       age: 24,
//       fees: 8888,
//       hobbies: ["Coding", "Robotics", "AI"],
//       comments: [{ value: "This is message" }],
//     });

//     const result = await studnetDoc.save();
//   } catch (error) {
//     console.log(error);
//   }
// };


// Retriveve all document
// const getAllDoc = async() => {
//     const result = await studentModul.find();
//     console.log(result);
    // result.forEach((item) => {
    //   console.log(item.name, item.age, item.fees.toString(),  item.hobbies[0], item.comments[0].value);
    // })
// }

// Retriveve all document with specific fields
const getAllDocSpecificField = async() => {
  // const result = await studentModul.find().select("name age fees"); // include
  // const result = await studentModul.find().select(["name", "age", "fees"]); // include
  // const result = await studentModul.find().select({name: 1, age: 1}); // include

    // const result = await studentModul.find().select("-name -age -fees"); // exclude
  // const result = await studentModul.find().select(["-name", "-age", "-fees"]); //exclude
  const result = await studentModul.find().select({name: 0, age: 0}); // exclude
  console.log(result);
  // result.forEach((item) => {
  //   console.log(item.name, item.age, item.fees.toString(),  item.hobbies[0], item.comments[0].value);
  // })
}

export { getAllDocSpecificField};
// export {getAllDoc, getAllDocSpecificField};
// export default studentDoc;
