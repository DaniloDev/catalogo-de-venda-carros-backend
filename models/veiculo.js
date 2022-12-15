const mongoose = require('mongoose')
const VeiculoSchema                                                                                                                                                                                                                                                                  = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    foto: {
        type: String,
        required: true
    },
})

const Veiculo = mongoose.model('Veiculo', VeiculoSchema)

module.exports = Veiculo