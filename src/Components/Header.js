import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import './Header.css'

export default function Header({ bplLogo }) {
  return (
    <div className="header-top">
      <CustomLink to="/">
        <img id='logo' src={ bplLogo } alt='best professor list'/>
      </CustomLink>
      <CustomLink id="title-name" to="/">Best Professor List</CustomLink>
      <CustomLink id="contact-link" to="/contact">Contact</CustomLink>
    </div>
  )
}

function CustomLink({ id, to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path : resolvedPath.pathname, end: true })

  return <Link id={id} className={isActive ? "active" : ""} to={to} {...props}>{children}</Link>
}