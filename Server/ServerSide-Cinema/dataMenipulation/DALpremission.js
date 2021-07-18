const jsonfile = require('jsonfile')
const premissionPath = './DataSources/premission.json'


// general funs=ction to get the all json data
const getAllJson = (path) =>{
    return new Promise((resolve, reject)=>{
        jsonfile.readFile(path, (err, data)=>{
            if(err) {reject(err)}
            else {resolve(data)}
        })
    })
}

// general fanction to complitliy re- rithe the all json
const writeAllJson = (path, newJson) =>{
    return new Promise((resolve, reject) => {
        jsonfile.writeFile(path, newJson, err =>{
            if(err) {
                reject(err)
            }else{
                resolve(true)
            }
        })
    })
}
//|||||||||||||||||||||||||||||||||||||||||||||||||
const getPremissionById = (id) =>{
    return new Promise((resolve, reject)=>{
        jsonfile.readFile(premissionPath, (err , premissions)=>{
            if(err) reject(err)
            else {
                let premission = premissions.premissions.filter(pre => pre.id === id)
                resolve(premission[0])
            }
        })
    })
}
const updatePremission = async(id, premissionArray) => { 
    if(id === undefined){
        return
    }
    // using the general function to get data
    let premissionData = await getAllJson(premissionPath)
    let newProm = premissionData.premissions.map(prem => {
        if(prem.id === id){
            return premissionArray
        }else{
            return prem
        }
    })
    premissionData.premissions = newProm
    // using the general function to send data
    let indication = await writeAllJson(premissionPath, premissionData)
    if(indication) {
        return 'updated'
    }
}
const deletePremissions = async(id) =>{
    if(id === undefined){
        return
    }
    let premissionData = await getAllJson(premissionPath)
    let deletedArray = premissionData.premissions.filter(prem => prem.id !== id)
    premissionData.premissions = deletedArray
    let indication = await writeAllJson(premissionPath, premissionData)
    if(indication) {
        return 'the premission deleted'
    }
}
const addNewPremissions = async(newPremissions) =>{
    let premissionData = await getAllJson(premissionPath)
    let newProm = premissionData.premissions
    newProm.push(newPremissions)
    premissionData.premissions = newProm
    let indication = await writeAllJson(premissionPath, premissionData)
    if(indication) {
        return 'added new premission'
    }
}
const getAllPremission = async() =>{
    let premissionData = await getAllJson(premissionPath)
    return premissionData.premissions
}



module.exports = 
    {getPremissionById,
     updatePremission,
     deletePremissions,
     addNewPremissions,
     getAllPremission,
      writeAllJson, 
      getAllJson
    }