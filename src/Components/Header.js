import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className="header-top">
      <a href="main.html">
        <img className="logo" src='./logo.png' alt="best professor list" />
      </a>
      <a className="title-name" href="main.html">Best Professor List</a>
      <a className="contact-link" href="contact.html">Contact</a>
    </div>
  )
}
