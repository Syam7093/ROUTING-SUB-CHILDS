import React, { useEffect, useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const User = () => {

const navigate=useNavigate()


    useEffect(()=>{
        getitems()
    },[])
    const getitems=async()=>{
       let token=localStorage.getItem("token")
       try{
        let data=await axios.post("http://localhost:8765/main/tockencheck",token={token})
        console.log(data.data.data.data.name,"syamsai")

       }
       catch(error)
       {
        console.log("somethidng went wrong...")
       }
       console.log(token,"token")

    }


    const logout=()=>{

        localStorage.clear()
        navigate("/")
    }
    const oneRef=useRef()
  return (
    <div>
         <h1 ref={oneRef}>hi</h1>
         <button onClick={()=>{
            console.log(oneRef.current.innerHTML="tow")
         }}>useREF</button>
         <button onClick={()=>{logout()}}>Logi=out</button>
    </div>
  )
}

export default User