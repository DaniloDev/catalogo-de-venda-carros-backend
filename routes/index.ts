import { Router } from "express"

const router: Router = Router()

import veiculos from '../routes/veiculos';
import series from '../routes/series';
import users from '../routes/users';
import auth from '../routes/auth';

router.use('/veiculos', veiculos)
router.use('/series', series)
router.use('/users', users)
router.use('/auth', auth)

export default router