import React from 'react'
import './Footer.css'

export default function Footer({ gitLogo }) {
  return (
    <div className='footer'>
        <a id="git-link" href="https://github.com/Yotham/BestProfessorsList">
          <img id="git-logo" src={ gitLogo } alt="github logo" />
          GitHub
        </a>
    </div>
  )
}
