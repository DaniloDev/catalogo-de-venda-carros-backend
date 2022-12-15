const router = require('express').Router()

const veiculos = require('../routes/veiculos')
const series = require('../routes/series')
const users = require('../routes/users')
const auth = require('../routes/auth')

router.use('/veiculos', veiculos)
router.use('/series', series)
router.use('/users', users)
router.use('/auth', auth)

module.exports = router