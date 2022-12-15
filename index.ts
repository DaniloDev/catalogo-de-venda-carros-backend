import "dotenv/config";
import app from './app'
const port = process.env.PORT
const mongo = process.env.MONGODB
import mongoose from 'mongoose'
import * as user from './controllers/auth'

mongoose
    .connect(mongo , { useNewUrlParser: true,  useCreateIndex: true, useUnifiedTopology: true })
    .then(()=> {
        user.createInitialUsers()
        app.listen(port, ()=>console.log('listening... at port ' + port))
    })
    .catch( e => console.log(e))



