import express from "express"
import "reflect-metadata"

import checkRoutes from "./route/check"
import userRoutes from "./route/user.route"
import processRoutes from "./route/process.route"
import processMovementRoutes from "./route/process-movement.route"

const app = express()
const port = 3000


app.use(express.json())
app.use(checkRoutes, userRoutes, processRoutes, processMovementRoutes)

app.listen(port, () => {
  console.log("Servidor rodando!")
})
