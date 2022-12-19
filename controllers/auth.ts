import { Request, Response } from 'express'
import User from '../models/user'
import jwt from 'jsonwebtoken'
const jwtSecret: any = process.env.JWTSECRET


const createInitialUsers = async() => {
    const total = await User.countDocuments({})
    if(total===0){
        const user = new User({
            name: 'Danilo',
            email: 'danisn2010@gmail.com',
            password: '123456',
            roles: ['restrito', 'admin']
        })
        await user.save()

        const user2 = new User({
            name: 'Usuario Restrito',
            email: 'restrito@gmail.com',
            password: '123456',
            roles: ['restrito']
        })
        await user2.save()
    }
}

const post = async(req: Request, res: Response) => {
    const user = req.body
    const userDb = await User.findOne({ email: user.email})
    if(userDb){
        if(userDb.password === user.password){
            const payload = {
                id: userDb._id,
                name: userDb.name,
                email: userDb.email,
                roles: userDb.roles
            }
            jwt.sign(payload, jwtSecret, (err : any,  token: any) => {
                res.send({
                    success: true,
                    name: payload.name,
                    email: payload.email,
                    token: token 
                })
            })
        }else{
            res.send({ success: false, message: 'wrong crendentials'})
        }
    }else{
        res.send({ success: false, message: 'wrong crendentials'})
    }
}
export{
    post, createInitialUsers
}