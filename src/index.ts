import express from "express"
import "reflect-metadata"

import checkRoutes from "./route/check"
import userRoutes from "./route/user.route"
import processRoutes from "./route/process.route"
import processMovementRoutes from "./route/process-movement.route"

const app = express()
const port = 3000

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT")
  res.header("Access-Control-Allow-Headers", "Authorization, Content-type")
  next()
})

app.use(express.json())
app.use(checkRoutes, userRoutes, processRoutes, processMovementRoutes)

app.listen(port, () => {
  console.log("Servidor rodando!")
})
