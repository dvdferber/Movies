const users = require('./usersModel')
const mongoose = require('mongoose')

const  getAllUsers = () =>{
    return new Promise((resolve,reject) => {
        users.find({}, (err, data) => {
            if(err){reject(err)}
            else{
                resolve(data)}
        })
    })
}
const  getUserByID = (id) =>{
    let connvertedId = mongoose.Types.ObjectId(id)
    return new Promise((resolve,reject) => {
        users.findById(connvertedId, (err, user) => {
            if(err){reject(err)}
            else{resolve(user)}
        })
    })
}
const createUser = (userObj) =>{
    return new Promise((resolve,reject) => {
        let newUser = new users({
            userName: userObj.userName,
            password: userObj.password
        })
        newUser.save(err => {
            if(err){reject(err)}
            else {resolve(newUser)}
        })
    })
}
const updateUser = (userId, userObj) =>{
    let connvertedId = mongoose.Types.ObjectId(userId)
    return new Promise (async(resolve,reject) =>{
        let updatedUser = {}; 
        if(userObj.password == null){
            const oldPass = await getUserByID(connvertedId)
            updatedUser = {
                userName: userObj.userName,
                password: oldPass.password
            }
        }
        else{
            updatedUser = {
                userName: userObj.userName,
                password: userObj.password
            }
        }
        users.findByIdAndUpdate(connvertedId, updatedUser, err =>{
            if(err){reject(err)}
            else resolve(updatedUser)
        } )
    })
}
const deleteUser = (id) => {
    let userId = mongoose.Types.ObjectId(id)
    return new Promise((resolve,reject) =>{
        users.findByIdAndDelete(userId, err =>{
            if(err) reject(err)
            else resolve('the user deleted successfuly')
        })
    })
}
const chackIfUserAndApssIsCorrect = async(userName, password) =>{
    let allusers = await getAllUsers()
    let valueToReturn = false
    allusers.forEach(user =>{
        if(user.userName === userName && password === user.password){
            valueToReturn =  user._id
        }
    })
    if(valueToReturn){
        return valueToReturn
    }else{
        return valueToReturn
    }
}

module.exports = {getAllUsers, getUserByID, createUser,updateUser, deleteUser, chackIfUserAndApssIsCorrect}