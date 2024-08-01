import express from "express"
import bodyParser from "body-parser"
import compression from "compression"
import cors from "cors"
import morgan from "morgan"
import dotenv from "dotenv"

import swaggerDocs from "./helpers/Swagger"
import router from "./health/index-router"

function boostrap(): void {

  const app = express()
  dotenv.config()

  app.use(express.json())
  app.use(
    cors({
      credentials: true,
    })
  )
  app.use(morgan("dev"))
  app.use(compression())
  app.use(bodyParser.json())

  const { PORT } = process.env

  app.listen(PORT, () => {
    console.log(`[APP] - Started application on port ${PORT}`)
    router(app);
    swaggerDocs(app, Number(PORT));
  })
}

boostrap()
