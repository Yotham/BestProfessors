import React, { useState } from 'react'
import './ProfHome.css'

export default function ProfHome({ data }) {
  const [searchText, setText] = useState('');
  const handleChange = event => {
    setText(event.target.value.toLowerCase());
    console.log('value is:', searchText);
  }

  return (
    <div>
      <input id="class-search-home" onChange = {handleChange} type="text" placeholder="Search by professor name...." />
      <div className='prof-list'>
        {
          data && data
          .sort((a,b) => a.overall_rating < b.overall_rating ? 1 : -1)
          .map( profName => {
            return (
            <div>
            {(() => {
              if ((profName.profname.toLowerCase().includes(searchText) || searchText === "") && profName.overall_rating != 0.0) {
                return(
                  <div className='prof-name' key={ profName.profName }>
                  { profName.profname } --- <span> </span>
                  { profName.overall_rating.toFixed(1)}
                  <br></br><br></br>
                  { profName.reviews && profName.reviews.map( ratings => {
                    return (
                      <div key={ ratings.className }>
                        { ratings.className } <br></br>
                        { ratings.reviewEmotion } <br></br>
                        { ratings.qualityRating.toFixed(1) } <br></br>
                        { ratings.review } <br></br><br></br>
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
    </div>
  )
}
