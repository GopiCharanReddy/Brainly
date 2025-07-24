import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers["authorization"]?.split("Bearer ")[1]
  const decoded = jwt.verify(header as string, process.env.JWT_SECRET as string)
  if(!decoded) {
    res.status(403).json({message: "Invalid token or not logged in."})
  }
  //@ts-ignore
  req.userId = decoded.id
  next()
}