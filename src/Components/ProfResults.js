import './ProfResults.css'
import ProfessorReviews from './ProfessorReviews';
import {useLocation } from 'react-router-dom'
import React, { useState } from 'react'

// handle user input that is not a prof at RPI
// checks if prof exited in json data after looking through
// json data for prof
// takes boolean seeProf and what the user input into the search bar as input
// outputs error message if prof not seen, or empty string if prof was seen
function ifNotSeen(seenProf, search){
  if(seenProf === false){
    return (
      <div>
        <div><span>{search} is not an RPI professor that has any ratings.</span></div>
        <div><span><a href="/profhome">Click Here to See a List of RPI Professors with Ratings</a></span></div>
        <div><span><a href="/">Click Here to Return to Search</a></span></div>
      </div>

    )
  }
  return("")
}


export default function ProfResults() {
  const location = useLocation();
  console.log(location)
  let data = location.state.data;
  let search = location.state.professor.message;
  let seenProf = false
    
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div>
      {
        data && data
        .map((professors, i)=> {
          return (
            <div className='prof' key={ professors.profname }>
              {(() => {
                if (professors.profname.toUpperCase() === search.toUpperCase()) {
                  seenProf = true
                  return (
                      <div id='prof-name'>
                          <div className='prof-name-title' onClick={() => toggle(i)}>
                          <h2>{ professors.profname } - { professors.overall_rating.toFixed(1)}</h2>
                          <h2>{selected === i ? '-' : '+'}</h2>
                        </div>
                        <div className={selected === i ? 'content show' : 'content'}>
                          <ProfessorReviews reviewData={professors.reviews}/>
                        </div>
                      <br></br>
                      </div>
                  )
                }
                // Handle invalid user input. Tell user that their input was wrong, then provide a link
                // to the professor list page, and a link back to the home page


              })()}
            </div>
          )
        })
      }
      <div><center>
        {ifNotSeen(seenProf, search)}
      </center></div>
    </div>
  )
}
