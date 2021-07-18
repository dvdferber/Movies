const member = require('../schemas/membersModel')

const getAllMembers = () =>{
    return new Promise((resolve,reject) =>{
        member.find({}, (err, data) =>{
            err? reject(err): resolve(data)
        })
    })
}
const getMembersByID = (memberId) =>{
    return new Promise((resolve,reject) =>{
        member.findById(memberId, (err, member) =>{
            if(err) {reject(err)}
            else{resolve(member)}
        })
    })
}
const updateMember = (id, memberToUpdate) =>{
    return new Promise((resolve,reject) =>{
        member.findByIdAndUpdate(id, {
            name: memberToUpdate.name,
            email: memberToUpdate.email,
            city: memberToUpdate.city
        }, err =>{
            if(err){reject(err)}
            else{resolve('member was updateed')}
        })
    })
}


const addMember = (newMenber) => {
    return new Promise((resolve,reject) => {
        let memberToAdd = new member ({
            name:newMenber.name,
            email:newMenber.email,
            city:newMenber.city
        })
        memberToAdd.save(err => {
            if(err){
                reject(err)
            }
            else{
                resolve(memberToAdd)
            }
        })
    })
}
const deleteMember = (id) =>{
    return new Promise((resolve,reject) =>{
        member.findByIdAndDelete(id, err => {
            if(err){reject(err)}
            else{resolve('the member was deleted')}
        })
    })
}
module.exports = {addMember, getAllMembers, getMembersByID, updateMember, deleteMember}