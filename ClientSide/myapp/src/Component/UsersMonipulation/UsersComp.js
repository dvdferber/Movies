import React, {useEffect, useState } from 'react'
import {clearUserData} from '../Data/Utils'
import UserComp from './UserComp'

const UsresComp = (props) =>{
    const [users, setUsers] = useState([])
    const [trigger, setTrigger] = useState(false)
    // const [showUsers, setShowUsers] = useState(true)


    useEffect(()=>{
        let unmonted = false
        const getData = async()=>{
            let data =  await clearUserData()// function in utils file
            setUsers(data)
        }
        if(!unmonted){
            getData()
        }
        return ()=>{
            unmonted = true
        }
    },[trigger])
    
    let usersToRender = users.map((user) => {
        return <UserComp key={user.id} user={user} trigger={bool => setTrigger(!trigger)}/>
    })
    return (<div>
        {/* {showUsers && usersToRender} */}
        {usersToRender}
    </div>)
}
export default UsresComp