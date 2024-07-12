import React, { useContext, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { context } from '../App'



const About = () => {
  const [one,setone]=useState('')
  let data=useContext(context)
  console.log(data,"data")
  // setone(data)
  return (
    <div>
        <button><Link to="saved">Saved</Link></button>
        <button><Link to="deleted">Deleted</Link></button>
        {/* <h1>{one}</h1> */}
        <Outlet></Outlet>
    </div>
  )
}

export default About