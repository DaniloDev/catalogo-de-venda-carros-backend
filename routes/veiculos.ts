import { Router } from "express"
import Veiculo from '../models/veiculo'

const router: Router = Router()

// READ
router.get('/', async(req, res) => {
    const veiculos = await Veiculo.find({})
    res.send(veiculos)
})

// READ ONE
router.get('/:id', async(req, res) => {
    const veiculo = await Veiculo.findOne({ _id: req.params.id })
    res.send(veiculo)
})


export default router