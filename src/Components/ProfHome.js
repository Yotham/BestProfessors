import React, { useState } from 'react'
import './ProfHome.css'

export default function ProfHome({ data }) {
  const [searchText, setText] = useState('');
  const handleChange = event => {
    setText(event.target.value.toLowerCase());
    console.log('value is:', searchText);
  }
  var foundFlag = false;

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
                foundFlag = true;
                return(
                  <div className='prof-name' key={ profName.profName }>
                  { profName.profname } --- <span> </span>
                  { profName.overall_rating.toFixed(1)}
                  <br></br><br></br>
                  <center><select >
                        <option selected disabled = "true" >Professor Reviews</option>{
                          profName.reviews && profName.reviews.map((result) => (<option disabled = "true"> {result.className} - {result.qualityRating.toFixed(1)} - {result.review} </option>))
                        }

                  </select></center>
                </div>
                )
              }
            })()}
            </div>
            )
          })
        }
      </div>
      {(() => {
        if (!foundFlag) {
          return (
            <center><div id='no-course-found'>
              no professor found with that name!
            </div></center>
          )
        }
      })()}
    </div>
  )
}
