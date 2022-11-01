import React, { useState } from "react"
import Header from "./Components/Header"
import NavBar from "./Components/NavBar"
import HomeBody from "./Components/HomeBody"
import About from "./Components/About"
import ClassHome from "./Components/ClassHome"
import ClassResults from "./Components/ClassResults"
import ProfHome from "./Components/ProfHome"
import ProfResults from "./Components/ProfResults"
import Footer from "./Components/Footer"
import Contact from "./Components/Contact"
import BPLLogo from "./Images/logo.png"
import RMPData from './Data/rmp.json'
import CourseData from './Data/courses.json'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header bplLogo={ BPLLogo }/>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomeBody/>} />
          <Route path="/classhome" element={<ClassHome data={CourseData}/>} />
          <Route path="/profhome" element={<ProfHome data={RMPData}/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App;