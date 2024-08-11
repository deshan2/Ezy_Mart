import { useState } from 'react'
import { SignIn } from './pages';
import { SignUp } from './pages';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
   
    <>
    
    <Routes>
    
    
      <Route path="/" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      
    </Routes>
  </>
  )
}

export default App
