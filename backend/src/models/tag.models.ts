import mongoose, { mongo } from "mongoose";

const tagSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  }
},{timestamps: true})

export const Tag = mongoose.model("Tag", tagSchema)