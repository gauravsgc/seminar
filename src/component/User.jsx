import { useState,useEffect } from "react"
import Data from './Data/data.json'

import React from 'react'

const User = () => {
    // const[user,setuser]=useState([]);
    const [user1,setuser1]=useState([]);
    const [user2,setuser2]=useState([]);


const [state,setState]=useState(true);

useEffect(()=>{
    setuser(Data);
    console.log(Data);
    
    console.log(Data[0]);
    console.log(Data[1]);
    setuser1(Data[0])
    setuser2(Data[1])
})
const handlClick=()=>{
    setState(!state);
}



  return (
    
    <div>
        
       
       {state?<>
        name: {user1?.name?.first}
        
        email:{user1?.email}
        gender:{user1?.gender} </>:
        <>
        name: {user2?.name?.first}
        email:{user2?.email}
        gender:{user2?.gender} </>
        }
       
      {/* name:
      gender
      email id: */}

      <button onClick={handlClick}>click</button>
    </div>
  )
}

export default User
