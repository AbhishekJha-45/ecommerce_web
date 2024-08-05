import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: "true",
  },
  description: {
    type: String,
    required: true,
    trim: "true",
  },
  subCategory: {
    type: Array,
    default: [],
  },
});

export const Category = mongoose.model("Category", categorySchema);
