import { useState,useEffect } from "react"


import React from 'react'

const User1 = () => {
    const[user,setuser]=useState([]);
    
const [state,setState]=useState(true);

const handlClick=()=>{
    setState(!state);
}


    async function getData() {
        const url = "https://randomuser.me/api/";
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
      
          const json = await response.json();
          console.log(json.results);
          setuser(json.results)
        } catch (error) {
          console.error(error.message);
        }
      }
      useEffect(()=>{
        getData();
      },[state])

  return (
    
    <div>
         {user?.length>0&&user.map(e=><li key={e.email}>{e.gender}{e.name.first}{e.email}</li>)}
        
       
       

      <button onClick={handlClick}>click</button>
    </div>
  )
}

export default User1
