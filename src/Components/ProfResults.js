import React from 'react'
import './ProfResults.css'
import {useLocation } from 'react-router-dom'

export default function ProfResults() {
  const location = useLocation();
  console.log(location)
  let data = location.state.data;
  let search = location.state.professor.message;
  let seenProf = false
  return (
    <div>
      {
        data && data.map( professors => {
          return (
            <div className='prof' key={ professors.profname }>
              {(() => {
                if (professors.profname.toUpperCase() === search.toUpperCase()) {
                  seenProf = true
                  return (
                    <div className='full-review-prof'>
                      <div id='prof-name'>
                        { professors.profname }
                        <span> - </span>
                        { professors.overall_rating }
                        
                        <span> - </span><button>Click to view reviews</button>
                      </div>
                      { professors.reviews && professors.reviews.map( ratings => {
                        return (
                          <button></button>
                          /*
                          <div className='rating'>
                            <span> Class: </span> { ratings.className } <br></br>
                            { ratings.reviewEmotion }
                            <span> : </span> { ratings.qualityRating } <br></br>
                            <span> Review: </span> { ratings.review }
                          </div>
                          */
                        )
                      }) }
                    </div>
                  )
                }
                // Handle invalid user input. Tell user that their input was wrong, then provide a link
                // to the professor list page, and a link back to the home page
                else if(seenProf === false && (professors.profname === data[data.length - 1].profname)){
                  return (
                    <div>
                      <div><span>{search} is not an RPI professor that has any ratings.</span></div>
                      <div><span><a href="/profhome">Click Here to See a List of RPI Professors with Ratings</a></span></div>
                      <div><span><a href="/">Click Here to Return to Search</a></span></div>
                    </div>

                  )
                }

              })()}
            </div>
          )
        })
      }
    </div>
  )
}
