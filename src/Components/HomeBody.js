import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import './HomeBody.css'

export default function HomeBody({ data }) {
  /*
  state = {
    value: ''
  };
  getValue = (event) => {
    console.log('Input: ', event.target.value);
    const professor = this.professor.value;
    const classN = this.classN.value;
    this.setState({professor: professor, className: classN});
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const professor = this.state.professor;
    const classN = this.state.classN;
    console.log("professor on submit", professor);
    console.log("classN",classN );
  };
  */
  
  return (
    <div>
      <input className="professor-search" type="text" /*onChange = {this.getValue} ref = {(input) => this.professor = input}*/ placeholder="Search Professors...." />
      <CustomLink to="/classresults">Search</CustomLink>
      <input className="class-search" type="text" /*onChange = {this.getValue} ref = {(input) => this.classN = input}*/ placeholder="Search Classes...." />
      <CustomLink to="/profresults">Search</CustomLink>
    </div>
  )
}

// this function creates a custom "Link" component which sets the class
// to reflect if the page is currently active as well as setting the id,
// redirect address and displayed information
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path : resolvedPath.pathname, end: true })

  return <Link id='search-btn' className={isActive ? "active" : ""} to={to} {...props}>{children}</Link>
}