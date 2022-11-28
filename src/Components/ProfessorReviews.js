import React from 'react'
import './ProfessorReviews.css'

export default function ProfessorReviews({ reviewData }) {
  return (
    <div>
        {
            reviewData && reviewData.map( profReviews => {
                return (
                    <div className='review-data'>
                        <div className='review-data-title'>
                            <h3>{ profReviews.className } - { profReviews.qualityRating.toFixed(1)}<br></br></h3>
                        </div>
                        <br></br>
                        
                        { profReviews.review }
                    </div>
                )
            })
        }
    </div>
  )
}
