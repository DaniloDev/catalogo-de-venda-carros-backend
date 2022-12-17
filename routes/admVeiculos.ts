import { Router } from "express"
import Veiculo from '../models/veiculo'
import jwt from 'jsonwebtoken'
const jwtSecret: any = process.env.JWTSECRET

const router: Router = Router()


router.use(async(req, res, next) => {
    const token = req.headers['x-acess-token'] || req.body.token || req.query.token
    if(token){
        try{
            const payload = jwt.verify(token, jwtSecret)
            if(payload.roles.indexOf('admin')>= 0){
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
    const veiculo = new Veiculo(req.body)
    try{
        await veiculo.save()
        res.send(veiculo)
    }catch(e){
        res.send({
            success: false,
            errors: Object.keys(e.errors)
        })
      }
})

// UPDATE
router.put('/:id', async(req, res) => {
    const veiculo =  await Veiculo.findOne({ _id: req.params.id })
    veiculo.name = req.body.name
    veiculo.status = req.body.status
    try{
        await veiculo.save()
        res.send(veiculo)
    }catch(e){
        res.send({
            success: false,
            errors: Object.keys(e.errors)
        }) 
    }
})

// DELETE
router.delete('/:id', async(req, res) => {
    await Veiculo.deleteOne({ _id: req.params.id })
    res.send({
        success: true
    })
})



export default router