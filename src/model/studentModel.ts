import mongoose, { Schema } from "mongoose";

export const students: Schema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: [1, "student name must not be empty"],
    maxlength: [15, "student name must not be exceeding the limit 15"],
  },
});

export default mongoose.model("students", students);

// export default class Todo {
//     constructor(public id: string, public text: string) { }

// }
