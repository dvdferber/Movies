const utiles = require('./utiles')

const membersURL = 'http://localhost:8000/api/members'


const getAllmembers = async() =>{
    let respond = await utiles.getAll(membersURL)
    return respond
}

const getmembersByID = async(id) =>{
    let respond = await utiles.getByID(id, membersURL)
    return respond
}

const updateMembers = async(id, obj) =>{
    let respond = await utiles.updateExsist(id, membersURL, obj)
    return respond
}

const deleteMembersObj = async(id) =>{
    let respond = await utiles.deleteObj(id, membersURL)
    return respond
}


const createNewMembers = async(newMember) =>{
    let respond = await utiles.createNew(membersURL, newMember)
    return respond
}

module.exports = {getAllmembers, getmembersByID, updateMembers, deleteMembersObj, createNewMembers}
