import { Router } from "express"

import { register, login } from "../controllers/auth-controller"

export default function productRouter(router: Router): void {

  router.post("/register", register)
  router.post("/login", login)
}
