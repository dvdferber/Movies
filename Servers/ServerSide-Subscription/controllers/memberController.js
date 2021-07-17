const express = require('express')
const memberBL = require('../models/businessLogic/membersBL')
const router = express.Router()



router.route('/').get(async (req, resp) => {
    let allMembers = await memberBL.getAllMembers()
    return resp.json(allMembers)
})
router.route('/:id').put(async(req, resp)=>{
    let memberId = req.params.id
    let memberToUpdate = req.body
    let respond = await memberBL.updateMember(memberId, memberToUpdate)
    return resp.json(respond)
})
router.route('/:id').get(async(req, resp)=>{
    let memberId = req.params.id
    let member = await memberBL.getMembersByID(memberId)
    return resp.json(member)
})
router.route('/').post(async (req, resp) => {
    let newMember = req.body
    let newMemberStatus = await memberBL.addMember(newMember)
    return resp.json(newMemberStatus)
})
router.route('/:id').delete(async (req, resp) =>{
    let id = req.params.id
    let respond = await memberBL.deleteMember(id)
    return resp.json(respond)
})

module.exports = router ;