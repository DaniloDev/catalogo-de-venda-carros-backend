import mongoose from 'mongoose'
const VeiculoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
})

const Veiculo = mongoose.model('Veiculo', VeiculoSchema)

export default Veiculo