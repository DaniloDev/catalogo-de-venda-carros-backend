import { Request, Response } from "express"
import Veiculo from '../models/veiculo'

// READ
const get = async(req: Request, res: Response) => {
   let { offset , limit } = req.query
   offset = Number(offset)
   limit = Number(limit)

   if(!limit){
    limit = 8
   }
   if(!offset){
    offset = 0
   }

    const veiculos = await Veiculo.find({}).sort({_id: -1}).skip(offset).limit(limit)
    const total = await Veiculo.countDocuments({})
    res.send({
        results : {
            veiculos,
            offset,
            limit,
            total
        }
    })
}

// READ ONE
const getId = async(req: Request, res: Response) => {
    const veiculo = await Veiculo.findOne({ _id: req.params.id })
    res.send(veiculo)
}


export {
    get, getId
}