const utiles = require('./utiles')

const subscriptionURL = 'http://localhost:8000/api/subscription'


const getAllSubscriptions = async() =>{
    let respond = await utiles.getAll(subscriptionURL)
    return respond
}

const getSubscriptionsByID = async(id) =>{
    let respond = await utiles.getByID(id, subscriptionURL)
    return respond
}

const updateSubscriptions = async(id, obj) =>{
    let respond = await utiles.updateExsist(id, subscriptionURL, obj)
    return respond
}

const deleteSubscriptionsObj = async(id) =>{
    let respond = await utiles.deleteObj(id, subscriptionURL)
    return respond
}


const createNewSubscriptions = async(newSubscription) =>{
    let respond = await utiles.createNew(subscriptionURL, newSubscription)
    return respond
}

module.exports = {getAllSubscriptions, getSubscriptionsByID, updateSubscriptions, deleteSubscriptionsObj, createNewSubscriptions}
