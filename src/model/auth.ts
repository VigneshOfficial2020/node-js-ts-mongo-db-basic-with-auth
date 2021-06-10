import mongoose, { Schema } from "mongoose";
const uniqueValidator = require("mongoose-unique-validator");

export const userSchemas: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchemas.plugin(uniqueValidator);

export default mongoose.model("userSchemas", userSchemas);
