const express = require('express')
const DALsubscription = require('D:/FS/FinalProject-Movies/Servers/ServerSide-Cinema/dataMenipulation/subscriptionDALs/SubsctiptionDAL')
const router = express.Router()

router.route('/').get(async(req, resp) => {
    let subscription = await DALsubscription.getAllSubscriptions()
    return resp.json(subscription)
})
router.route('/:id').get(async(req, resp) => {
    let subscription = await DALsubscription.getSubscriptionsByID(req.params.id)
    return resp.json(subscription)
})
router.route('/:id').put(async(req, resp) => {
    let newArray = req.body
    let status = await DALsubscription.updateSubscriptions(req.params.id ,newArray)
    return resp.json(status)
})
router.route('/:id').delete(async(req, resp) => {
    let status = await DALsubscription.deleteSubscriptionsObj(req.params.id)
    return resp.json(status)
})
router.route('/').post(async(req, resp) => {
    let newsubscription = req.body
    let status = await DALsubscription.createNewSubscriptions(newsubscription)
    return resp.json(status)
})
module.exports = router