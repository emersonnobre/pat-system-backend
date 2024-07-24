import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

const auth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Token de autenticação não fornecido!" })
  }

  const parts = authHeader.split(" ")

  if (parts.length != 2) {
    return res.status(401).json({ message: "Token de autenticação inválido!" })
  }

  const [scheme, token] = parts

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).json({ message: "Token de autenticação mal formatado!" })
  }

  jwt.verify(token, process.env.JWT_SECRET || "chave_secreta", (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Token de autenticação inválido" })
    }

    // @ts-ignore
    req.userId = decoded.id
    return next()
  })
}

export default auth