import React from 'react'
import './HomeBody.css'

export default function HomeBody() {
  return (
    <div>
        <div>
            <input className="class-search" type="text" placeholder="Search Classes...." />
            <a className="search-btn" href="class-results.html">Search</a>
        </div>
        <div>
            <input className="professor-search" type="text" placeholder="Search Professors...." />
            <a className="search-btn" href="prof-results.html">Search</a>
        </div>
    </div>
  )
}
