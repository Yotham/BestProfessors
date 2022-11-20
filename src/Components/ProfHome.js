import React from 'react'
import './ProfHome.css'

export default function ProfHome({ data }) {
  return (
    <div className='prof-list'>
      {
        data && data.map( profName => {
          return (
            <div className='prof-name' key={ profName.profName }>
              { profName.profname } --- <span> </span>
              { profName.overall_rating.toFixed(1)}
              <br></br><br></br>
              { profName.reviews && profName.reviews.map( ratings => {
                return (
                  <div key={ ratings.className }>
                    { ratings.className } <br></br>
                    { ratings.reviewEmotion } <br></br>
                    { ratings.qualityRating.toFixed(1)} <br></br>
                    { ratings.review } <br></br><br></br>
                  </div>
                )
              }) }
            </div>
          )
        })
      }
    </div>
  )
}
