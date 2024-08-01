import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

export const authRequired = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]

    if (!token)
      return res.status(401).json({ message: "Not token, access denied" })
    try {
      const secret = process.env.TOKEN_SECRET
      if (!secret) {
        return res.status(500).json({ message: "TOKEN SECRET is not defined" })
      }
      const verified = jwt.verify(token, secret)
      req.body.user = verified
      next()
    } catch (err) {
      return res.status(400).json({ message: "Invalid Token" })
    }
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: (error as Error).message })
  }
}
