import { Router } from "express"

const router: Router = Router()

import veiculos from './veiculos';
import admVeiculos from './admVeiculos';
import auth from '../routes/auth';

router.use('/veiculos', veiculos)
router.use('/admVeiculos', admVeiculos)
router.use('/auth', auth)

export default router