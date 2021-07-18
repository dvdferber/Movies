const express = require('express')
const usersBL = require('../models/usersBL')
const router = express.Router()

router.route('/').get(async(req, resp)=>{
    let data = await usersBL.getAllUsers()
    return resp.json(data)
})
router.route('/:id').get(async(req,resp)=>{
    let id = req.params.id
    let user = await usersBL.getUserByID(id)
    return resp.json(user)
})

router.route('/').post(async(req, resp)=>{
    let newUser = req.body
    let userResp = await usersBL.createUser(newUser)
    return resp.json(userResp)
})
router.route('/:id').put(async(req, resp)=>{
    let updatedUser = req.body
    let userResp = await usersBL.updateUser(req.params.id, updatedUser)
    return resp.json(userResp)
})
router.route('/:id').delete(async(req, resp)=>{
    let status = await usersBL.deleteUser(req.params.id)
    return resp.json(status)
})
router.route('/login/:userName/:password').get(async(req,resp)=>{
    let user = req.params.userName
    let pass = req.params.password
    let respond = await usersBL.chackIfUserAndApssIsCorrect(user, pass)
    return resp.json(respond)
})
module.exports = router