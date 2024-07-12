import React, { useState } from 'react'

const Profile = () => {
  const [eamil,setemail]=useState('')
  const [password,setpassword]=useState('')
  const [emailerror,setemailerror]=useState('')
  const [passworderror,setpassworderror]=useState('')
  const [show,setshow]=useState(false)

  const buttonclick=()=>{

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const one=emailRegex.test(eamil)
    if(eamil.trim() === "")
    {
      setshow(true)
      setemailerror("enter email id") 
      
    }
    else if(!one){
      setshow(true)
      setemailerror("plz enter correct email id")
    }
    else{
      setshow(false)
      console.log("correct")
    }


  }
  return (
    <div>
      <h1>profile...</h1>
      <div>
        <label>Email</label>
        <input type="text" onChange={(e)=>{setemail(e.target.value)}}></input>
        {show && <span style={{color:"red"}}>{emailerror}</span>}
      </div>
      <div>
        <label>password</label>
        <input type="text" onChange={(e)=>{setpassword(e.target.value)}}></input>
      </div>
      <button onClick={()=>{buttonclick()}}>submit</button>
    </div>
  )
}

export default Profile