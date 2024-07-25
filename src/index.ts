import express from "express"

import checkRoutes from "./routes/check"

const app = express()
const port = 3000


app.use(express.json())
app.use(checkRoutes)

app.listen(port, () => {
  console.log("Servidor rodando!")
})
