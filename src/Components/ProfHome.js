import React, { useState } from 'react'
import ProfessorReviews from './ProfessorReviews';
import './ProfHome.css'

export default function ProfHome({ data }) {
  const [searchText, setText] = useState('');
  const handleChange = event => {
    setText(event.target.value.toLowerCase());
    console.log('value is:', searchText);
  };
  var foundFlag = false;

  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  

  return (
    <div>
      <input id="class-search-home" onChange = {handleChange} type="text" placeholder="Search by professor name...." />
      <div id = "heading">Professors</div>
      <div className='prof-list'>
        {
          data && data
          .map((profName, i) => {
            return (
            <div>
            {(() => {
              if ((profName.profname.toLowerCase().includes(searchText) || searchText === "") && profName.overall_rating != 0.0) {
                foundFlag = true;
                return(
                  <div className='prof-item' key={ profName.profName }>
                    <div className='prof-item-title' onClick={() => toggle(i)}>
                      <h2>{ profName.profname } - { profName.overall_rating.toFixed(1)}</h2>
                      <h2>{selected === i ? '-' : '+'}</h2>
                    </div>
                    <div className={selected === i ? 'content show' : 'content'}>
                      
                      <ProfessorReviews reviewData={profName.reviews}/>
                    </div>
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
    <br></br>
    <br></br>
    </div>
  )
}