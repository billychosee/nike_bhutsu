//Defines a Mongoose schema.

import mongoose, { Schema } from "mongoose";

const discountCode = new Schema({
  code: { type: String },
  discount: { type: String },
  validity: {
    type: Boolean,
    default: true,
  },
});

//If model is not availabe , create it.
const DiscountCode =
  mongoose.models.DiscountCode || mongoose.model("DiscountCode", discountCode);

export default DiscountCode;
