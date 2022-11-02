import React from 'react'
import './ProfResults.css'

export default function ProfResults({ data, search }) {
  return (
    <div>
      {
        data && data.map( professors => {
          return (
            <div className='prof' key={ professors.profname }>
              {(() => {
                if (professors.profname === search) {
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
}
