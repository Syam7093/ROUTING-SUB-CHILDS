import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Auth = ({children}) => {
    const [login,setlogin]=useState(true)
    const navigate=useNavigate()
    useEffect(()=>{
        mainone()
    })
    const mainone=()=>{
        let token=localStorage.getItem("token")
        if(token)
            {
                setlogin(true) 
            }
            else{
                setlogin(false) 
                navigate("/")
            }
    }

  return (
    login?children:<h1>hi</h1>
  )
}

export default Auth