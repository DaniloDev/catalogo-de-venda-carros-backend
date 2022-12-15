import express from 'express';
const app = express()
import routes from './routes';
//const session = require('express-session')

app.use(express.json())

app.use(function (req, res, next) {
    res.removeHeader("X-Powered-By");
    next();
  });
/*
app.use(session({
    name: 'sesseionId',
    secret: 'MyDevShopRulez!',
    resave: true,
    saveUninitialized: true
}))
*/

//const cors = require('cors')
/* PARTE DO CORS
app.use(cors({
    origin: (origin, callback) => {
        if(origin === 'http://server1:8080'){
            callback(null, true)
        }else{
            callback(new Error('Not allowed by CORS'))
        }
    }
}))

*/
app.use(routes)

export default app