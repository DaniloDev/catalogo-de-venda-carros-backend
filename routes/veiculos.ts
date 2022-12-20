import { Router } from "express"

const router: Router = Router()

import * as veiculosController from '../controllers/veiculos'


router.get('/', veiculosController.get)

router.get('/:id', veiculosController.getId)


export default router