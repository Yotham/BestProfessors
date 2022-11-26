import React from 'react'

export default function ProfessorReviews({ reviewData }) {
  return (
    <div>
        {
            reviewData && reviewData.map( profReviews => {
                return (
                    <div>
                        { profReviews.className } -- { profReviews.qualityRating }<br></br>
                        { profReviews.reviewEmotion } <br></br>
                        { profReviews.review }
                    </div>
                )
            })
        }
    </div>
  )
}
