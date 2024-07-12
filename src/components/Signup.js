import React, { useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

const Signup = () => {
    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState()


    const submitfunction=async()=>{

        let datasubmit={
            name:name,
            email:email,
            password:password
        }
        let data=await axios.post("http://localhost:8765/main/signup",datasubmit)
        console.log(data)

    }
  return (
    <div>
        <div>
            <label>name</label>
            <input type="text" onChange={(e)=>{setname(e.target.value)}}></input>
        </div>
        <div>
            <label>email</label>
            <input type="text" onChange={(e)=>{setemail(e.target.value)}}></input>
        </div>
        <div>
            <label>password</label>
            <input type="text" onChange={(e)=>{setpassword(e.target.value)}}></input>
        </div>
        <button onClick={()=>{submitfunction()}}>submit</button>
        <h5>plz <Link to="/">Login</Link></h5>
        </div>
  )
}

export default Signup