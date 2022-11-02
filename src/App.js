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
import GitHubLogo from "./Images/github-logo.png"
import RMPData from './Data/rmp.json'
import CourseData from './Data/courses.json'
import { Route, Routes } from 'react-router-dom'

function App() {
  // for class search data structure:
  // {
    // "CSCI1100": [
      // {
        // "professor": Uzma Mushtaque,
        // "rating": 2.6
      // },
      // {
        // "professor": Uzma Mushtaque,
        // "rating": 2.6
      // }
    // ]
  // },
  // {
    // "CSCI1200": [
      // {
        // "professor": Uzma Mushtaque,
        // "rating": 2.6
      // },
      // {
        // "professor": Uzma Mushtaque,
        // "rating": 2.6
      // }
    // ]
  // }
  // pass to the ClassResults component all the data in the desired course value
  // as well as the course name

  return (
    <div className="App">
      {/* Taking all the components and displaying the appropriate ones */}
      {/* depending on the current page */}
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
      <Footer gitLogo={GitHubLogo}/>
    </div>
  )
}

export default App;