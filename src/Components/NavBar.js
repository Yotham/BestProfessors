import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
  return (
    <div className='nav-bar'>
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/classhome">Classes</CustomLink>
      <CustomLink to="/profhome">Professors</CustomLink>
      <CustomLink to="/about">About</CustomLink>
    </div>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path : resolvedPath.pathname, end: true })

  return <Link className={isActive ? "active" : ""} to={to} {...props}>{children}</Link>
}