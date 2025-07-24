import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 10,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
},{timestamps: true})

export const User = mongoose.model("User", userSchema)