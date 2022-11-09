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

const studentModel = mongoose.model("Student", studentSchema);

// const studentDoc = async () => {
//   try {
//     const studntDoc = new studentModel({
//       name: "Hamim",
//             age: 26,
//             fees: 8888,
//             hobbies: ["Coding", "Robotics", "AI"],
//             comments: [{ value: "This is message" }],
//     });
//     const result = await studntDoc.save();
//   } catch (e) {}
// };

// const getAllDoc = async() => {
//     try {
//         const result = await studentModel.find();
//         console.log(result);
//     } catch (e) {
//         console.log(e);
//     }
// }

// update by id
// const updateBuId = async(id) => {
//     try {
//         // const result = await studentModel.findByIdAndUpdate(id, {name: "Ruble", age: 24})
//         const result = await studentModel.findByIdAndUpdate(id, {name: "Hamim", age: 24}, {returnDocument: "after"})
//         console.log(result);
//     } catch (e) {
//         console.log(e);
//     }
// }
// update by one
// const updateBuId = async(id) => {
//     try {
//         // const result = await studentModel.findByIdAndUpdate(id, {name: "Ruble", age: 24})
//         // const result = await studentModel.updateOne({_id: id}, {name: "Jennie"})
//         // will update if it find the id otherwise update by create a new one
//         const result = await studentModel.updateOne({_id: id}, {name: "Jennie"}, {upsert: true})
//         console.log(result);
//     } catch (e) {
//         console.log(e);
//     }
// }

// update multiple
const updateBuId = async(id) => {
    try {
        const result = await studentModel.updateMany({_id: id}, {name: "Jennie", age: 24}, {upsert: true})
        console.log(result);
    } catch (e) {
        console.log(e);
    }
}

export {updateBuId};
