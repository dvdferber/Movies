const express = require('express')
const subscriptionsBL = require('../models/businessLogic/subscriptionBL')
const router = express.Router()


router.route('/').get(async (req, resp) => {
    let allSubscriptions = await subscriptionsBL.getAllSubscriptions()
    return resp.json(allSubscriptions)
})
router.route('/:id').get(async(req, resp)=>{
    let subscriptionsId = req.params.id
    let subscription = await subscriptionsBL.getSubscriptionsById(subscriptionsId)
    return resp.json(subscription)
})
router.route('/:id').put(async(req, resp)=>{
    let subscriptionsId = req.params.id
    let updateSubsciption = req.body
    let respond = await subscriptionsBL.updateSubscriptions(subscriptionsId, updateSubsciption)
    return resp.json(respond)
})
router.route('/').post(async (req, resp) => {
    let newSubsrption = req.body
    let newSubsrptionStatus = await subscriptionsBL.addSubscriptions(newSubsrption)
    return resp.json(newSubsrptionStatus)
})
router.route('/:id').delete(async(req, resp) =>{
    let id = req.params.id
    let respond = await subscriptionsBL.deleteSubscription(id)
    return resp.json(respond)
})

module.exports = router ;