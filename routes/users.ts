import {  Router } from 'express'
import User from '../models/user'
import jwt from 'jsonwebtoken'
const jwtSecret: any = process.env.JWTSECRET

const router: Router = Router()

const returnUserWithoutPassword  = async() => {
    const usersSend = []

    const users = await User.find().lean()
    
    for(var i = 0; i < users.length; i++){

        const {password, ...userWithOutPassWord} = users[i]

        usersSend.push(userWithOutPassWord)
    }
    return usersSend
}

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

// READ

router.get('/', async(req, res) => {
    const users = await returnUserWithoutPassword()
    res.send(users)
})

export default router