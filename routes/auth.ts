import { Router } from "express"

const router: Router = Router()

import * as authController from '../controllers/auth'


router.post('/', authController.post)

export default router