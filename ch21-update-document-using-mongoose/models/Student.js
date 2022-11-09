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

const getAllDoc = async() => {
    try {
        const result = await studentModel.find();
        console.log(result);
    } catch (e) {
        console.log(e);
    }
}

export {getAllDoc};
