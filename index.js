require('autoenv')
const app =  require('./app')
const port = process.env.PORT
const mongo = process.env.MONGODB
const mongoose = require('mongoose')
const user = require('./controllers/auth')

mongoose
    .connect(mongo, { useNewUrlParser: true,  useCreateIndex: true, useUnifiedTopology: true })
    .then(()=> {
        user.createInitialUsers()
        app.listen(port, ()=>console.log('listening... at port ' + port))
    })
    .catch( e => console.log(e))



