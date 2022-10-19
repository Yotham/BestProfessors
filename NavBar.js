import React from 'react'
import './NavBar.css'

export default function NavBar() {
  return (
    <div className="nav-bar">
      <a className="home-nav" href="main.html">Home</a>
      <a className="classes-nav" href="classes-home.html">Classes</a>
      <a className="professors-nav" href="prof-home.html">Professors</a>
      <a className="about-nav" href="about.html">About</a>
    </div>
  )
}
