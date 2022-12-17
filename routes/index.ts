import { Router } from "express"

const router: Router = Router()

import veiculos from './veiculos';
import admVeiculos from './admVeiculos';
import series from '../routes/series';
import users from '../routes/users';
import auth from '../routes/auth';

router.use('/veiculos', veiculos)
router.use('/admVeiculos', admVeiculos)
router.use('/series', series)
router.use('/users', users)
router.use('/auth', auth)

export default router