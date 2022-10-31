import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import './HomeBody.css'

export default function HomeBody({ data }) {
  return (
    <div>
      <input className="professor-search" type="text" placeholder="Search Professors...." />
      <CustomLink to="/classresults">Search</CustomLink>
      <input className="class-search" type="text" placeholder="Search Classes...." />
      <CustomLink to="/profresults">Search</CustomLink>
    </div>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path : resolvedPath.pathname, end: true })

  return <Link id='search-btn' className={isActive ? "active" : ""} to={to} {...props}>{children}</Link>
}