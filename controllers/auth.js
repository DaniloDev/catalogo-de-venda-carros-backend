const User = require('../models/user')
const jwt = require('jsonwebtoken')
const jwtSecret = process.env.JWTSECRET


const createInitialUsers = async() => {
    const total = await User.countDocuments({})
    if(total===0){
        const user = new User({
            username: 'danilo',
            password: '123456',
            roles: ['restrito', 'admin']
        })
        await user.save()

        const user2 = new User({
            username: 'restrito',
            password: '123456',
            roles: ['restrito']
        })
        await user2.save()
    }
}

const post = async(req, res) => {
    const user = req.body
    const userDb = await User.findOne({ username: user.username})
    if(userDb){
        if(userDb.password === user.password){
            const payload = {
                id: userDb._id,
                username: userDb.username,
                roles: userDb.roles
            }
            jwt.sign(payload, jwtSecret, (err, token) => {
                res.send({
                    success: true,
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

module.exports = {
    post, createInitialUsers
}