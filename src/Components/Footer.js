import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import './Footer.css'

export default function Footer({ gitLogo }) {
  return (
    <div className='footer'>
        <div id='git-link'>
          <a href="https://github.com/Yotham/BestProfessorsList">
            <img id="git-logo" src={ gitLogo } alt="github logo" />
          </a>
          <a id='git-title' href='https://github.com/Yotham/BestProfessorsList'>GitHub</a>
        </div>
        <CustomLink id="contact-link" to="/contact">Contact</CustomLink>
    </div>

    
  )
}

function CustomLink({ id, to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path : resolvedPath.pathname, end: true })
  return <Link id={id} className={isActive ? "active" : ""} to={to} {...props}>{children}</Link>
}