const jsonfile = require('jsonfile')

const usersPath =  './DataSources/users.json'
const genFunc = require('./DALpremission')

const getAllJsonUsers = async() =>{
    let data = await genFunc.getAllJson(usersPath)
    return data.users
}
const getJsonUserByID = async(id) =>{
    let data = await genFunc.getAllJson(usersPath)
    let user = data.users.filter(user => user.id === id)
    return user[0]
}
const updateUserInJson = async(id, userToupdate) =>{
    if(id === undefined){
        return
    }
    let data = await genFunc.getAllJson(usersPath)
    let newUsers = data.users.map(user => {
        if(user.id === id){
            return userToupdate
        }else{
            return user
        }
    })
    data.users = newUsers
    let respond = await genFunc.writeAllJson(usersPath, data)
    if(respond) {
        return 'the user was updteed'
    }
}
const insertNewUserToJson = async(userToInsert)=>{
    let data = await genFunc.getAllJson(usersPath)
    let newUsersArray = data.users
    newUsersArray.push(userToInsert)
    data.users = newUsersArray
    let respond = await genFunc.writeAllJson(usersPath, data)
    if(respond) {
        return 'new user was Added'
    }
}
const deleteUserFromJson = async(id) =>{
    if(id === undefined){
        return
    }
    let data = await genFunc.getAllJson(usersPath)
    let userToDelete = data.users
    let index = userToDelete.findIndex(user => user.id === id)
    userToDelete.splice(index, 1)
    data.users = userToDelete
    let respond = await genFunc.writeAllJson(usersPath, data)
    if(respond) {
        return 'user was deleted'
    }
}

module.exports = {getAllJsonUsers, getJsonUserByID, updateUserInJson, insertNewUserToJson, deleteUserFromJson}