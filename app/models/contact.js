//Defines a Mongoose schema.

import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    minLength: [5, "Email must be at least 5 characters long"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//If model is not availabe , create it.
const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
