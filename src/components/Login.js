import React, { useState } from 'react'
import axios from "axios";
import { Link, useNavigate, } from 'react-router-dom';

const Login = () => {
    const navigation=useNavigate()
   
    const [email,setemail]=useState('')
    const [password,setpassword]=useState()


    const submitfunction=async()=>{

        let datasubmit={
           
            email:email,
            password:password
        }
        let data=await axios.post(`http://localhost:8765/main/login`,datasubmit)
        console.log(data,"data----")
        console.log(data.data.isLogin)
        try
        {
            if(data.data.isLogin===true)
                {
                    localStorage.setItem("token",data.data.data)
                    navigation("/user")

                    
                }
          
        }
        catch(error)
        {

        }


    }
  return (
    <div>
        
        <div>
            <label>email</label>
            <input type="text" onChange={(e)=>{setemail(e.target.value)}}></input>
        </div>
        <div>
            <label>password</label>
            <input type="text" onChange={(e)=>{setpassword(e.target.value)}}></input>
        </div>
        <button onClick={()=>{submitfunction()}}>submit</button>
        <h5>plz <Link to="/sign">signup</Link></h5>
        </div>
  )
}

export default Login