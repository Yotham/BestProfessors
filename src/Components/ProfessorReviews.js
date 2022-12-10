/* eslint-disable linebreak-style */
/* eslint max-len: ["error", { "code": 150 }] */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint camelcase: "error" */
/* eslint indent: ["error", 2] */
import React from 'react';
import './ProfessorReviews.css';
/**
 * Generates ProfessorReview object
 * @return {ProfessorReviews} Review Dropdown
 */
export default function ProfessorReviews({reviewData}) {
  return (
    <div>
      {
        reviewData && reviewData.map( (profReviews) => {
          return (
            <div className='review-data'>
              <div className='review-data-title'>
                <h3>{ profReviews.className } - { profReviews.qualityRating.toFixed(1)}<br></br></h3>
              </div>
              <br></br>

              { profReviews.review }
            </div>
          );
        })
      }
    </div>
  );
}
