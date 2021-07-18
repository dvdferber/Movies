const express = require('express')
const MemberDAL = require('D:/FS/FinalProject-Movies/Servers/ServerSide-Cinema/dataMenipulation/subscriptionDALs/MemberDAL')
const router = express.Router()


////////////////////////////////////// members
router.route('/').get(async(req, resp) => {
    let member = await MemberDAL.getAllmembers()
    return resp.json(member)
})
router.route('/:id').get(async(req, resp) => {
    let member = await MemberDAL.getmembersByID(req.params.id)
    return resp.json(member)
})
router.route('/:id').put(async(req, resp) => {
    let newArray = req.body
    let status = await MemberDAL.updateMembers(req.params.id ,newArray)
    return resp.json(status)
})
router.route('/:id').delete(async(req, resp) => {
    let status = await MemberDAL.deleteMembersObj(req.params.id)
    return resp.json(status)
})
router.route('/').post(async(req, resp) => {
    let newMember = req.body
    let status = await MemberDAL.createNewMembers(newMember)
    return resp.json(status)
})
module.exports = router