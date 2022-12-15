const router = require('express').Router()
const Serie = require('../models/serie')
const jwt = require('jsonwebtoken')
const jwtSecret = process.env.JWTSECRET

router.use(async(req, res, next) => {
    const token = req.headers['x-acess-token'] || req.body.token || req.query.token
    if(token){
        try{
            const payload = jwt.verify(token, jwtSecret)
            if(payload.roles.indexOf('restrito')>= 0){
                next()
            }else{
                res.send({ success:false, errors: "wrong credentials"})
            }
           
        }catch(e){
            res.send({ success:false, errors:"wrong credentials"})
        }
    }else{
        res.send({ success:false, errors: "wrong credentials"})
    }
})

// CREATE
router.post('/', async(req, res) => {
    const serie = new Serie(req.body)
    try{
        await serie.save()
        res.send(serie)
    }catch(e){
        res.send({
            success: false,
            errors: Object.keys(e.errors)
        })
      }
})

// READ
router.get('/', async(req, res) => {
    const series = await Serie.find({})
    res.send(series)
})

// READ ONE
router.get('/:id', async(req, res) => {
    const serie = await Serie.findOne({ _id: req.params.id })
    res.send(serie)
})

// UPDATE
router.put('/:id', async(req, res) => {
    const serie =  await Serie.findOne({ _id: req.params.id })
    serie.name = req.body.name
    serie.status = req.body.status
    try{
        await serie.save()
        res.send(serie)
    }catch(e){
        res.send({
            success: false,
            errors: Object.keys(e.errors)
        }) 
    }
})

// DELETE
router.delete('/:id', async(req, res) => {
    await Serie.deleteOne({ _id: req.params.id })
    res.send({
        success: true
    })
})



module.exports = router
