const express = require('express')
const router = express.Router()
const DALusers = require('../dataMenipulation/DALusers')

router.route('/').get(async(req, resp) =>{
    let users = await DALusers.getAllJsonUsers()
    return resp.json(users)
})
router.route('/:id').get(async(req, resp)=>{
    let user = await DALusers.getJsonUserByID(req.params.id)
    return resp.json(user)
})
router.route('/:id').put(async(req, resp) =>{
    let userToupdate = req.body
    let respond = await DALusers.updateUserInJson(req.params.id, userToupdate)
    return resp.json(respond)
})
router.route('/').post(async(req, resp) =>{
    let userToAdd = req.body
    let respond = await DALusers.insertNewUserToJson(userToAdd)
    return resp.json(respond)
})
router.route('/:id').delete(async(req, resp)=>{
    let status = await DALusers.deleteUserFromJson(req.params.id)
    return  resp.json(status)
})
module.exports = router