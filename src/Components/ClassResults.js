import React from 'react'
import {useLocation } from 'react-router-dom'
export default function ClassResults() {
  const location = useLocation();
  console.log(location)
  let rmpData = location.state.data
  let search = location.state.professor.message
  let courseData = location.state.courseData.CourseProfs[search.toString()]
  return (
    <div>
      <center><div className='course-search'>
        { search }
      </div></center>
      {
        courseData && courseData.map( prof => {
          return (
            <div>
              {
                rmpData && rmpData.map( professors => {
                  return (
                    <div className='prof' key={ professors.profname }>
                      {(() => {
                        if (professors.profname === prof) {
                          return (
                            <div className='full-review'>
                              <div id='prof-name'>
                                { professors.profname }
                                <span> - </span>
                                { professors.overall_rating }
                              </div>
                              { professors.reviews && professors.reviews.map( ratings => {
                                return (
                                  <div className='rating'>
                                    <span> Class: </span> { ratings.className } <br></br>
                                    { ratings.reviewEmotion }
                                    <span> : </span> { ratings.qualityRating } <br></br>
                                    <span> Review: </span> { ratings.review }
                                  </div>
                                )
                              }) }
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
        })
      }
    </div>
    
  )
}
