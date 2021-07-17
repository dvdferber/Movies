const express = require('express')
const DALpremission = require('../dataMenipulation/DALpremission')
const router = express.Router()

router.route('/:id').get(async(req, resp) => {
    let prem = await DALpremission.getPremissionById(req.params.id)
    return resp.json(prem)
})
router.route('/').get(async(req, resp) => {
    let prem = await DALpremission.getAllPremission()
    return resp.json(prem)
})
router.route('/:id').put(async(req, resp) => {
    let newArray = req.body
    let status = await DALpremission.updatePremission(req.params.id, newArray)
    return resp.json(status)
})
router.route('/:id').delete(async(req, resp) => {
    let status = await DALpremission.deletePremissions(req.params.id)
    return resp.json(status)
})
router.route('/').post(async(req, resp) => {
    let newPrem = req.body
    let status = await DALpremission.addNewPremissions(newPrem)
    return resp.json(status)
})
module.exports = router