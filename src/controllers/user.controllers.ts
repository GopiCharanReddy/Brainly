import { Request, Response, NextFunction } from 'express';
import { User } from '../models/user.models';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const signup = async(req: Request, res: Response, next: NextFunction) => {
  const {username, password} = req.body;
try {
  
    if(!username || username===undefined || !password) {
     res.status(411).json({message: "All fields are required."})
     return;
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const existingUser = await User.findOne({username})
    if(existingUser) {
      res.status(403).json({message: "User already exists."})
      return;
    }
    const user = await User.create({username, password: hashedPassword})

    if(!user){
      res.status(500).json({message: "Something went wrong while signing up."})
    }
    res.status(200).json({message: "User signed up successfully."})
    return;
} catch (error: unknown) {
  next(error)
}
}

const signin = async(req: Request, res: Response, next: NextFunction) => {
  const {username, password} = req.body;
  try {
    if(!username || !password) {
      res.status(411).json({message: "All fields are required."})
      return;
    }
    const user = await User.findOne({username})
    if(!user) {
      res.status(404).json({message: "User does not exist."})
      return;
    }
    const isPassword = await bcrypt.compare(password, user.password)
    if(!isPassword){
      res.status(403).json({message: "Enter correct password."})
      return;
    }
    const token = jwt.sign({id: user._id, username: user.username}, process.env.JWT_SECRET!, {expiresIn: '1h'})
  
    res.status(200).json({token, message: "User signed in successfully."})
    return;
  } catch (error) {
    next(error)
  }
}

export {
  signup, signin
}