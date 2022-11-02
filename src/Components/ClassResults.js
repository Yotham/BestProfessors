import React from 'react'

export default function ClassResults({ courseData, rmpData, search }) {
  return (
    <div>
      <div className='course-search'>
        { search }
      </div>
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
                        // else {
                        //   return (
                        //     <div>No data found for prof</div>
                        //   )
                        // }
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
