import { Router } from "express"

import healthRouter from "./health-router"

const router = Router()

export default function (app: Router): Router {
  /**
   *@openapi
   * components:
   *  schemas:
   *   BadRequest:
   *    type: object
   *    required:
   *     - message
   *    example:
   *      message: error message
   *   NotFound:
   *    type: object
   *    required:
   *      - message
   *    example:
   *      message: Not found
   */
  healthRouter(app)

  return router
}
