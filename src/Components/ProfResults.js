import React, { useState } from 'react'
import './ProfResults.css'
import {useLocation } from 'react-router-dom'

export default function ProfResults() {
  const location = useLocation();
  console.log(location)
  let data = location.state.data;
  let search = location.state.professor.message;
  let seenProf = false
  const [Display, setFlag] = useState(false);
  const handleChange = event => {
    if(Display === false){
      setFlag = true;
    }
    else{
      setFlag = false;
    }
  }
  return (
    <div>
      {
        data && data
        .map( professors => {
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
                        <br></br>
                      <center><select >
                        <option selected disabled = "true" >Professor Reviews</option>{
                          professors.reviews && professors.reviews.map((result) => (<option disabled = "true"> {result.className} - {result.qualityRating.toFixed(1)} - {result.review} </option>))
                        }

                      </select></center>
                      </div>
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
