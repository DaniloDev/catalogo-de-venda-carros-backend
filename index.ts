import "dotenv/config";
import app from './app'
const port = process.env.PORT || 4000
const mongo = process.env.MONGODB || 'mongodb://localhost/car-showcase'
import mongoose from 'mongoose'
import * as user from './controllers/auth'
import * as admVeiculos from './controllers/admVeiculos'

mongoose
    .connect(mongo , { useNewUrlParser: true,  useCreateIndex: true, useUnifiedTopology: true })
    .then(()=> {
        user.createInitialUsers()
        admVeiculos.createInitialVeiculos()
        app.listen(port, ()=>console.log('listening... at port ' + port))
    })
    .catch( e => console.log(e))



