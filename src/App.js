import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from './components/User';
import About from './components/About';
import Contact from './components/Contact';
import Profile from './components/Profile';
import Saved from './components/Saved';
import Delete from './components/Delete';
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import Auth from './components/Auth';

export const context=createContext()

function App() {

  let data="syamsaai"
  return (
   <context.Provider value={data}>
    <BrowserRouter>
   <div className='main'>
    <Header></Header>
   
   <Routes>
    
   
   <Route path='/' element={<Login></Login>}></Route>
   <Route path='/sign' element={<Signup></Signup>}></Route>

    <Route path='/user' element={<Auth> <User></User></Auth>}></Route>
    <Route path='/profile' element={<Auth><Profile></Profile></Auth>}></Route>
    <Route path='/about' element={<Auth> <About></About></Auth>}>
    <Route path='saved' element={<Saved></Saved>}></Route>
    <Route path='deleted' element={<Delete></Delete>}></Route>
    </Route>
    <Route path='/contact' element={<Auth> <Contact></Contact></Auth>}></Route>
   </Routes>
   </div>
   </BrowserRouter>
   </context.Provider>
  );
}

export default App;
