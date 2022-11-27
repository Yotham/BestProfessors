import React, { useState } from "react"
import Header from "./Components/Header"
import NavBar from "./Components/NavBar"
import About from "./Components/About"
import ClassHome from "./Components/ClassHome"
import ClassResults from "./Components/ClassResults"
import ProfHome from "./Components/ProfHome"
import ProfResults from "./Components/ProfResults"
import Footer from "./Components/Footer"
import Contact from "./Components/Contact"
import RMPData from './Data/rmp.json'
import CourseData from './Data/courses.json'
import CourseProfs from './Data/courseProfs.json'
import GitHubLogo from "./Images/github-logo.png"
import BPLLogo from "./Images/logo.png"
import './App.css'
import { Route, Routes, useResolvedPath, useMatch, Link} from 'react-router-dom'


function App() {
  document.title = "Best Professor List"
  return (
    <div className="App">
      {/* Taking all the components and displaying the appropriate ones */}
      {/* depending on the current page */}
      <Header bplLogo={ BPLLogo } />
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomeBody/>} />
          <Route path="/classhome" element={<ClassHome data={CourseData}/>} />
          <Route path="/profhome" element={<ProfHome data={RMPData}/>} />
          <Route path="/profresults" element={<ProfResults/>} />
          <Route path="/classresults" element={<ClassResults/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
      <Footer gitLogo={GitHubLogo}/>
    </div>
  )
}

// to reflect if the page is currently active as well as setting the id,
// redirect address and displayed information
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path : resolvedPath.pathname, end: true })

  return <Link id='search-btn' className={isActive ? "active" : ""} to={to} {...props}>{children}</Link>
}

function HomeBody() {
  const [message, setMessage] = useState('');
  const handleChange = event => {
    setMessage(event.target.value);
    console.log('value is:', event.target.value);
  }

  // const handleEnter = event => {
  //   if (event.key === 'Enter') {

  //   }
  // }

  return (
    <div id = "search_bars">
      <input id = "prof_search" className="professor-search" onChange = {handleChange} /* onKeyDown={handleEnter} */ type="text" placeholder="Search Professors...." />
      <CustomLink id = "search_button1" to = "/profresults"state={{data: RMPData, professor: {message}}}>Search</CustomLink>
      <input id = "class_search" className="class-search" maxlength = "8" onChange = {handleChange} onSubmit type="text" placeholder="Search Classes...." />
      <CustomLink id = "search_button2" to = "/classresults"state={{data: RMPData, courseData: {CourseProfs}, professor: {message}}}>Search</CustomLink>
    </div>
  )
}

export default App;