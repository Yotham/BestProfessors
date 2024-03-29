/* eslint-disable linebreak-style */
/* eslint max-len: ["error", { "code": 150 }] */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint camelcase: "error" */
/* eslint indent: ["error", 2] */
import React, {useState} from 'react';
import NavBar from './Components/NavBar';
import About from './Components/About';
import ClassHome from './Components/ClassHome';
import ClassResults from './Components/ClassResults';
import ProfHome from './Components/ProfHome';
import ProfResults from './Components/ProfResults';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import RMPData from './Data/rmp.json';
import CourseData from './Data/courses.json';
import CourseProfs from './Data/courseProfs.json';
import GitHubLogo from './Images/github-logo.png';
import './App.css';
import {Route, Routes, useResolvedPath, useMatch, Link} from 'react-router-dom';

/**
 * Generates entire website
 * @return {app} website
 */
function App() {
  document.title = 'Best Professors';
  return (
    <div className="App">
      {/* Taking all the components and displaying the appropriate ones */}
      {/* depending on the current page */}
      {/* <Header bplLogo={ BPLLogo } /> */}
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomeBody/>} />
          <Route path="/classhome" element={<ClassHome data={CourseData}/>} />
          <Route path="/profhome" element={<ProfHome data={RMPData}/>} />
          <Route path="/profresults" element={<ProfResults data={RMPData}/>} />
          <Route path="/classresults" element={<ClassResults/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
      <Footer gitLogo={GitHubLogo}/>
    </div>
  );
}
/**
 * this function creates a custom "Link" component which sets the class
 * to reflect if the page is currently active as well as setting the id,
 * redirect address and displayed information
 * @return {CustomLink} custom link
 */
function CustomLink({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({path: resolvedPath.pathname, end: true});

  return <Link id='search-btn' className={isActive ? 'active' : ''} to={to} {...props}>{children}</Link>;
}

/**
 * Generates Homebody for the index page
 * @return {HomeBody} i.e the search bars
 */
function HomeBody() {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
    console.log('value is:', event.target.value);
  };

  return (
    <div className="search-groups-container">
      <div className="search-group">
        <input
          className="search-input professor-search"
          onChange={handleChange}
          type="text"
          placeholder="Search Professors...."
        />
        <CustomLink className="search-button" to="/profresults" state={{ data: RMPData, professor: { message } }}>
          Search
        </CustomLink>
      </div>
      <div className="search-group">
        <input
          className="search-input class-search"
          maxLength="8"
          onChange={handleChange}
          type="text"
          placeholder="Search Classes...."
        />
        <CustomLink className="search-button" to="/classresults" state={{ data: RMPData, courseProfs: CourseProfs, professor: { message } }}>
          Search
        </CustomLink>
      </div>
    </div>
  );
}


export default App;
