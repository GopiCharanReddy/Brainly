import { Response, Request, NextFunction } from "express"

const ApiError = (error: any, req: Request, res: Response, next: NextFunction) => {
  let errorMessage = "An unexpected error occurred";

  if(error instanceof Error) {
    errorMessage = error.message
  }else{
    errorMessage = String(error)
  }
  console.log("Api Error is: ", error)
  res.status(500).json({message: errorMessage})
}

export default ApiError