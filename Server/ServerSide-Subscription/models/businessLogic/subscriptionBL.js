const subscriptions = require('../schemas/subscriptionsModel')

const getAllSubscriptions = () =>{
    return new Promise((resolve,reject) => {
        subscriptions.find({}, (err, data)=>{
            if(err){reject(err)}
            else {resolve(data)}
        })
    })
}
const getSubscriptionsById = (subscriptionsId) =>{
    return new Promise((resolve,reject) =>{
        subscriptions.findById(subscriptionsId, (err, data) =>{
            if(err){reject(err)}
            else{resolve(data)}
        })
    })
}
const addSubscriptions = (newSubsciption) => {
    return new Promise((resolve,reject) => {
        let subscriptionsToAdd = new subscriptions ({
            memberId: newSubsciption.memberId,
            movies: newSubsciption.movies
        })
        subscriptionsToAdd.save(err => {
            if(err){
                reject(err)
            }
            else{
                resolve(subscriptionsToAdd)
            }
        })
    })
}
const updateSubscriptions = (id, updateSubsciption) => {
    return new Promise((resolve,reject) => {
        subscriptions.findByIdAndUpdate(id, {
            memberId:updateSubsciption.memberId,
            movies:updateSubsciption.movies
        }, err =>{
            if(err){reject(err)}
            else{resolve('the subsription was updated')}
        } )
    })
}
const deleteSubscription = (id) =>{
    return new Promise((resolve,reject) => {
        subscriptions.findOneAndDelete(id, err =>{
            if(err){reject(err)}
            else {resolve('subscription deleted')}
        })
    })
}
module.exports = {addSubscriptions, getAllSubscriptions, getSubscriptionsById, updateSubscriptions, deleteSubscription}
