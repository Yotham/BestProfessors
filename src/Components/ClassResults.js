import React, { useState } from 'react'
import {useLocation } from 'react-router-dom'
import ProfessorReviews from './ProfessorReviews';
import './ClassResults.css'

//determine if string is only letters
function isAlpha(s)
{
  return /^[a-zA-Z()]+$/.test(s);
}

// function handles output for when a course has no reviewed professors
// takes the number of reviews a course has as input
// outputs error message when numRevs  === 0, empty string otherwise
// called after looping through json data to get course review data
function ifNoRevs(numRevs){
  if(numRevs === 0)
    return(<div className='invalid'><center>
              <div><span>unfortunately, there are no rated professors teaching this course</span></div>
              <div><span><a href="/">try another search</a></span></div>
           </center></div>
          )
  return("")
}

//checks if search was valid. If the input is too long
//or not formatted like: CSCI4440, 0 is returned
//if the input is formatted properly but doesn't exist in catalog,
// 1 is returned.
//else the input is valid, return 2


function validInput(str, dat){
  if(str.length != 8 || !(isAlpha(str.substring(0,4))) || isNaN(str.substring(5))) {
    return (0)
  }
  else if (!(dat)) {
    return 1
  }
    return 2
}

//main function
export default function ClassResults() {
  const location = useLocation();
  console.log(location)
  let rmpData = location.state.data
  let search = location.state.professor.message.toString().toUpperCase()
  let courseData = location.state.courseData.CourseProfs[search]
  let valid = validInput(search, courseData)
  let numRevs = 0
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };  

  // handle badly formatted user input
  if( valid == 0){
    return (
      <center><div className='invalid'>
        <div><span>"{search}" is not a properly formatted search</span></div>
        <div><span>please try again with an RPI course ID; four letters followed by four numbers without spaces</span></div>
        <div><span>an example of a valid course ID is: "CSCI1100" without the quotation marks</span></div>
        <div><span><a href="/">try another search</a></span></div>
      </div></center>
    )
  }
  // handle input of a class that doesn't exist
  else if(valid == 1){
    return (
      <center><div className='invalid'>
        <div><span>"{search}" is not a course in the RPI catalog.</span></div>
        <div><span>please try again with an RPI course that actually exists</span></div>
        <div><span>an example of a valid course ID is: "CSCI1100" without the quotation marks</span></div>
        <div><span><a href="/">try another search</a></span></div>
      </div></center>
    )
  }
  return (
    <div>
      <center><div id='course-search'>
        { search }
      </div></center>
      {
        courseData && courseData.map( prof => {
          return (
            <div>
              {
                rmpData && rmpData
                .map((professors,i)=> {
                  return (
                    <div className='prof' key={ professors.profname }>
                      {(() => {
                        if (professors.profname === prof && professors.overall_rating !== 0) {
                          numRevs = numRevs + 1
                          return (
                            <div className='full-review'>
                              <div id='prof-name-class'>
                                <div className='prof-name-title' onClick={() => toggle(i)}>
                                  <h2>{ professors.profname } - { professors.overall_rating.toFixed(1)}</h2>
                                  <h2>{selected === i ? '-' : '+'}</h2>
                                </div>
                                <div className={selected === i ? 'content show' : 'content'}>
                                  <ProfessorReviews reviewData={professors.reviews}/>
                                </div>
                              </div>
                            </div>

                          )
                        }// end of if
                        //if there are no reviews after looking at every prof, bad input

                      })()}
                      
                    </div>
                  )
                })
              }


            </div>
          )
        })
      }
      <div>
      {ifNoRevs(numRevs)}
      </div>
      <br></br>
    </div>

  )
}
